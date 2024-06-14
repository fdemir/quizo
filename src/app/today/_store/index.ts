import { create } from "zustand";

interface QuizStoreProps {
  currentQuestion: number;
  nextQuestion: () => void;
  answers: Record<string, string>;
  setAnswer: (answer: string, index: number) => void;
}

export const useQuizStore = create<QuizStoreProps>((set) => ({
  currentQuestion: 0,
  nextQuestion: () =>
    set((state) => ({ currentQuestion: state.currentQuestion + 1 })),
  answers: {},
  setAnswer: (answer: string, index: number) =>
    set((state) => ({
      answers: { ...state.answers, [state.currentQuestion]: answer },
    })),
}));
