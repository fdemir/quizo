import { create } from "zustand";
import { TodayQuestions } from "../action";
import { createJSONStorage, persist } from "zustand/middleware";

interface QuizStoreProps {
  questions: TodayQuestions;
  setQuestions: (questions: TodayQuestions) => void;
  currentQuestionIdx: number;
  nextQuestion: () => void;
  answers: Record<string, string>;
  setAnswer: (answer: string, index: number) => void;
  currentQuestion: () => TodayQuestions[number];
  answer: () => string;
  isFinished: () => boolean;
  correctAnswers: () => number;
}

export const useQuizStore = create(
  persist<QuizStoreProps>(
    (set, get) => ({
      questions: [],
      setQuestions: (questions) => set({ questions }),
      currentQuestionIdx: 0,
      nextQuestion: () =>
        set((state) => ({ currentQuestionIdx: state.currentQuestionIdx + 1 })),
      answers: {},
      setAnswer: (answer: string, index: number) =>
        set((state) => ({
          answers: { ...state.answers, [state.currentQuestionIdx]: answer },
        })),
      currentQuestion: () => get().questions[get().currentQuestionIdx],
      answer: () => get().answers[get().currentQuestionIdx],
      isFinished: () => get().currentQuestionIdx === get().questions.length - 1,
      correctAnswers: () =>
        Object.keys(get().answers).map((key) => {
          const answer = get().answers[key];
          return answer === get().questions[Number(key)].correct_key;
        }).filter((answer) => answer === true).length,
    }),
    {
      name: "quiz",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
