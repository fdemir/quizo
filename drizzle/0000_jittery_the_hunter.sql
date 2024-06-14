CREATE TABLE IF NOT EXISTS "options" (
	"id" serial PRIMARY KEY NOT NULL,
	"option" text NOT NULL,
	"key" text NOT NULL,
	"question_id" integer,
	"created_at" date DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "questions" (
	"id" serial PRIMARY KEY NOT NULL,
	"question" text NOT NULL,
	"correct_key" text NOT NULL,
	"created_at" date DEFAULT now()
);
