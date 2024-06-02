import { date, integer, pgTable, text } from "drizzle-orm/pg-core";

export const questions = pgTable("questions", {
  id: integer("id").primaryKey(),
  question: text("question").notNull(),
  correct_option: integer("correct_option").notNull(),
  created_at: date("created_at").defaultNow(),
});

export const options = pgTable("options", {
  id: integer("id").primaryKey(),
  option: text("option").notNull(),
  question_id: integer("question_id").notNull().references(() => questions.id),
  created_at: date("created_at").defaultNow(),
});
