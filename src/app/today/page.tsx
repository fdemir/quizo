import { Button } from "@/components/ui/button";

import { Progress } from "@/components/ui/progress";
import { getTodayQuestions } from "./action";
import Question from "./_components/question";

export default async function Today() {
  const questions = await getTodayQuestions();

  return (
    <div className="bg-zinc-100 min-h-screen flex items-center justify-center">
      <div className="w-[400px] flex flex-col gap-4">
        <div className="flex items-center gap-4 w-full">
          <span className="font-bold text-3xl">#1</span>
          <Progress value={33} className="flex-1" color="bg-primary" />
          <span className="whitespace-nowrap">1 / 3</span>
        </div>

        <Question text="odsaopdsa" options={[]} correctKey="d" />

        <div className="w-full flex justify-between items-center">
          <span>{/* todo */}</span>
          <Button size="lg">Next</Button>
        </div>
      </div>
    </div>
  );
}
