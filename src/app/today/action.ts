import db from "@/db/drizzle";
import { questions } from "@/db/schema";
import { eq } from "drizzle-orm";

export const getTodayQuestions = async () => {
  return db.select().from(questions).where(
    eq(questions.created_at, new Date().toISOString().split("T")[0]),
  );
};
