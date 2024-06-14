import { getTodayQuestions } from "./action";
import Quiz from "./_components/quiz";

export default async function Today() {
  const questions = await getTodayQuestions();

  if (!questions) return <span> No questions today </span>;

  return (
    <div className="bg-zinc-100 min-h-screen flex items-center justify-center">
      <Quiz questions={questions} />
    </div>
  );
}
