"use client";

import { ConfettiButton } from "@/components/magic-ui/confetti";
import NumberTicker from "@/components/magic-ui/number-ticker";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useQuizStore } from "../../today/_store";

export default function ResultsContent({
  secretWord,
}: {
  secretWord: string | null;
}) {
  const correctAnswers = useQuizStore((state) => state.correctAnswers());
  const [reveal, setReveal] = useState(false);

  const handleShare = () => {
    window.open(
      "https://x.com/intent/tweet?text=I found the secret word on quizo.me"
    );
  };

  return (
    <div className="max-w-[300px] mx-auto md:my-32 my-4 flex items-center justify-center gap-10 flex-col">
      <h1 className="text-3xl font-bold">Congratz!</h1>

      <p className="text-lg text-center">
        You have completed the quiz and found the secret word!
      </p>

      <span className="text-lg font-semibold">
        <NumberTicker value={correctAnswers} /> / 10
      </span>

      <span
        className={cn("text-7xl font-bold transition-all", {
          "blur-2xl": !reveal,
        })}
      >
        {secretWord}
      </span>

      <div className="flex items-center justify-center gap-10 flex-col">
        <span onClick={() => setReveal(true)}>
          <ConfettiButton>Reveal</ConfettiButton>
        </span>
        <Button
          size="lg"
          className="w-full"
          variant="outline"
          onClick={handleShare}
        >
          Share on X
        </Button>
      </div>
    </div>
  );
}
