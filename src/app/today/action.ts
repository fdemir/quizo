"use server";
import { db } from "@/db/drizzle";
import { questions } from "@/db/schema";
import { eq } from "drizzle-orm";

export const getTodayQuestions = async () => {
  return db.query.questions.findMany({
    where: eq(questions.created_at, new Date().toISOString().split("T")[0]),
    with: {
      options: true,
    },
  });
};

export type TodayQuestions = Awaited<ReturnType<typeof getTodayQuestions>>;
