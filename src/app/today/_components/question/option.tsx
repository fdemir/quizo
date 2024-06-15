"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FaCheck, FaTimes } from "react-icons/fa";
import { useQuizStore } from "../../_store";

type OptionProps = {
  option: string;
  correct: boolean;
  optionKey: string;
  handleGiveAnswer: (optionKey: string) => void;
};

export default function Option({
  option,
  correct,
  optionKey,
  handleGiveAnswer,
}: OptionProps) {
  const { answer } = useQuizStore((state) => ({
    answer: state.answer(),
  }));

  const answered = answer || null;

  const isAnsweredCorrectly = answered === optionKey && correct;
  const isAnsweredIncorrectly = answered === optionKey && !correct;
  const isAnswered = answered !== null;

  return (
    <Button
      variant="outline"
      className="w-full justify-between items-center p-6"
      size="lg"
      onClick={() => handleGiveAnswer(optionKey)}
      disabled={!!answered}
    >
      <span>{option}</span>
      <span
        className={cn(
          "w-5 h-5 rounded-full border border-primary flex items-center justify-center",
          {
            "border-emerald-500 bg-emerald-500":
              isAnsweredCorrectly || (isAnswered && correct),
            "bg-primary": isAnsweredIncorrectly,
          }
        )}
      >
        {isAnsweredCorrectly || (isAnswered && correct) ? (
          <FaCheck className="text-white" />
        ) : isAnsweredIncorrectly ? (
          <FaTimes className="text-white" />
        ) : null}
      </span>
    </Button>
  );
}
