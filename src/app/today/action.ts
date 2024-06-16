"use server";
import { db } from "@/db/drizzle";
import { memdb } from "@/db/memory";
import { questions } from "@/db/schema";
import { eq } from "drizzle-orm";

export const getTodayQuestions = async () => {
  const result = await db.query.questions.findMany({
    where: eq(questions.created_at, new Date().toISOString().split("T")[0]),
    with: {
      options: true,
    },
  });
  return {
    questions: result,
    createdAt: new Date(),
  };
};

export type TodayQuestions = Awaited<
  ReturnType<typeof getTodayQuestions>
>["questions"];

export const getTodaySecretWord = async () => {
  return memdb.get("word");
};
