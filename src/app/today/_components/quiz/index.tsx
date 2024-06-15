"use client";

import { Progress } from "@/components/ui/progress";
import { TodayQuestions } from "../../action";
import Question from "../question";
import { Button } from "@/components/ui/button";
import { useQuizStore } from "../../_store";
import { useRouter } from "next/navigation";

export default function Quiz({ questions }: { questions: TodayQuestions }) {
  const router = useRouter();
  const currentQuestionIdx = useQuizStore((state) => state.currentQuestion);
  const currentQuestion = questions[currentQuestionIdx];
  const answer = useQuizStore((state) => state.answers[currentQuestionIdx]);
  const nextQuestion = useQuizStore((state) => state.nextQuestion);

  const handleNext = () => {
    const isFinished = currentQuestionIdx === questions.length - 1;

    if (isFinished) {
      router.push("/results");
      return;
    }

    nextQuestion();
  };

  return (
    <div className="w-[400px] flex flex-col gap-4">
      <div className="flex items-center gap-4 w-full">
        <span className="font-bold text-3xl">#{currentQuestionIdx + 1}</span>
        <Progress
          value={(currentQuestionIdx + 1) * 10}
          className="flex-1"
          color="bg-primary"
        />
        <span className="whitespace-nowrap">
          {currentQuestionIdx + 1} / {questions.length}
        </span>
      </div>

      <Question
        text={currentQuestion.question}
        key={currentQuestion.id}
        options={currentQuestion.options}
        correctKey={currentQuestion.correct_key}
      />

      <div className="w-full flex justify-between items-center">
        <span>{/* todo */}</span>
        <Button size="lg" disabled={!answer} onClick={handleNext}>
          Next
        </Button>
      </div>
    </div>
  );
}
