import { generateObject } from "ai";
import { z } from "zod";
import { openai } from "@ai-sdk/openai";
import { NextResponse } from "next/server";
import { options, questions } from "@/db/schema";
import { eq } from "drizzle-orm";
import { db } from "@/db/drizzle";
import { fields } from "./fields";
import { randomWords } from "@/constant";
import { memdb } from "@/db/memory";

function getRandomUniqueItems(arr: string[], numItems = 3) {
  const result = [];
  const usedIndices = new Set();

  while (result.length < numItems) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    if (!usedIndices.has(randomIndex)) {
      result.push(arr[randomIndex]);
      usedIndices.add(randomIndex);
    }
  }

  return result;
}

function getRandomItem(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const QUESTION_COUNT = 10;

const output_schema = z.object({
  questions: z.array(z.object({
    text: z.string(),
    correct: z.string(),
    options: z.array(z.object({
      key: z.string(),
      text: z.string(),
    })),
  })),
});

const insert = async (data: z.infer<typeof output_schema>) => {
  await Promise.all(
    data.questions.map(async (question) => {
      const result = await db.insert(questions).values({
        question: question.text,
        correct_key: question.correct,
      }).returning({ id: questions.id });

      await db.insert(options).values(question.options.map((option) => ({
        option: option.text,
        key: option.key,
        question_id: result[0].id,
      })));
    }),
  );
};

export async function POST(request: Request) {
  const { headers } = request;
  const signature = process.env.GEN_SECRET;

  if (headers.get("x-gen-secret") !== signature) {
    return NextResponse.json({ message: "No signature found." }, {
      status: 400,
    });
  }

  const isAlreadyGenerated = await db.select().from(questions).where(
    eq(questions.created_at, new Date().toISOString().split("T")[0]),
  );

  if (isAlreadyGenerated.length) {
    return NextResponse.json({ message: "Already generated today." }, {
      status: 400,
    });
  }

  const word = getRandomItem(randomWords);

  memdb.set("word", word);

  const categories = getRandomUniqueItems(fields);

  const { object } = await generateObject({
    model: openai("gpt-4o-2024-05-13"),
    schema: output_schema,
    prompt: `
        Create ${QUESTION_COUNT} interesting "trivial pursuit" like questions: 
        Categories: ${categories.join(", ")}
        Options: A, B, C, D
        Difficulty: Medium
      `,
    temperature: 0.7,
  });

  await insert(object);

  return NextResponse.json(object);
}
