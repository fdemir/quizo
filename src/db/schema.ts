import { relations } from "drizzle-orm";
import { date, integer, pgTable, serial, text } from "drizzle-orm/pg-core";

export const questions = pgTable("questions", {
  id: serial("id").primaryKey(),
  question: text("question").notNull(),
  correct_key: text("correct_key").notNull(),
  created_at: date("created_at").defaultNow(),
});

export const questionsRelations = relations(questions, ({ many }) => ({
  options: many(options),
}));

export const options = pgTable("options", {
  id: serial("id").primaryKey(),
  option: text("option").notNull(),
  key: text("key").notNull(),
  question_id: integer("question_id"),
  created_at: date("created_at").defaultNow(),
});

export const optionsRelations = relations(options, ({ one }) => ({
  question: one(questions, {
    fields: [options.question_id],
    references: [questions.id],
  }),
}));
