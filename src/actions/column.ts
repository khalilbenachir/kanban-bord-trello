import { TCard, TCardColumn } from "@/types/column";
import { create } from "zustand";

const cards: TCard[] = [
  {
    column: "backlog",
    id: "1",
    title: "Look into render bug in dashboard",
  },
  {
    column: "doing",
    id: "2",
    title: "Researsh db options for new microservice",
  },
  {
    column: "doing",
    id: "3",
    title: "Look into render bug in dashboard",
  },
  {
    column: "backlog",
    id: "4",
    title: "Look into render bug in dashboard",
  },
  {
    column: "backlog",
    id: "5",
    title: "Look into render bug in dashboard",
  },
  {
    column: "backlog",
    id: "6",
    title: "Look into render bug in dashboard",
  },
  {
    column: "todo",
    id: "7",
    title: "Look into render bug in dashboard",
  },
  {
    column: "todo",
    id: "9",
    title: "Look into render bug in dashboard",
  },
  {
    column: "done",
    id: "10",
    title: "Look into render bug in dashboard",
  },
  {
    column: "backlog",
    id: "11",
    title: "Look into render bug in dashboard",
  },
  {
    column: "todo",
    id: "12",
    title: "Look into render bug in dashboard",
  },
];

type TStore = {
  cards: TCard[];
  addCard: (title: string, column: TCardColumn) => void;
};

export const useStore = create<TStore>((set) => ({
  cards,
  addCard: (title, column) =>
    set((state) => {
      const newCards = [...state.cards];

      newCards.push({
        id: `${cards.length + 1}`,
        title,
        column,
      });

      return {
        ...state,
        cards: newCards,
      };
    }),
}));
