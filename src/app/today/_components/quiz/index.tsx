"use client";

import { Progress } from "@/components/ui/progress";
import { TodayQuestions } from "../../action";
import Question from "../question";
import { Button } from "@/components/ui/button";
import { useQuizStore } from "../../_store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Quiz({
  questions: serverQuestions,
}: {
  questions: TodayQuestions;
}) {
  const router = useRouter();

  const {
    questions,
    nextQuestion,
    currentQuestionIdx,
    currentQuestion,
    answer,
    isFinished,
  } = useQuizStore((state) => ({
    questions: state.questions,
    nextQuestion: state.nextQuestion,
    currentQuestionIdx: state.currentQuestionIdx,
    currentQuestion: state.currentQuestion(),
    answer: state.answer(),
    isFinished: state.isFinished(),
  }));

  useEffect(() => {
    useQuizStore.setState({ questions: serverQuestions });

    if (isFinished) {
      router.push("/results");
    }
  }, [serverQuestions]);

  if (!currentQuestion) return;

  const handleNext = () => {
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
