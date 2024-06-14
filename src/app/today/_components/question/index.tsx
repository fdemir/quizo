import { options as OptionsTable } from "@/db/schema";
import Option from "./option";
import { useQuizStore } from "../../_store";

export default function Question({
  text,
  options,
  correctKey,
}: {
  text: string;
  options: (typeof OptionsTable.$inferSelect)[];
  correctKey: string;
}) {
  const currentQuestion = useQuizStore((state) => state.currentQuestion);
  const setAnswer = useQuizStore((state) => state.setAnswer);

  const handleGiveAnswer = (key: string) => {
    console.log(key, currentQuestion);

    setAnswer(key, currentQuestion);
  };

  return (
    <>
      <p>{text}</p>
      <div className="flex flex-col gap-4">
        {options.map((option) => (
          <>
            <Option
              optionKey={option.key}
              key={option.key}
              option={option.option}
              correct={correctKey === option.key}
              handleGiveAnswer={handleGiveAnswer}
            />
          </>
        ))}
      </div>
    </>
  );
}
