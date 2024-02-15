import { useMemo, useState } from "react";
import { DndContext, DragEndEvent, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { cn } from "@/lib/utils";
import { useStore } from "@/actions/column";
import { TColumn } from "@/types/column";
import Card from "./card";
import Separator from "./separator";
import { AddCard } from "./add-card";

const Column = ({ title, headingColor, column }: TColumn) => {
  const [active, setActive] = useState(false);
  const cards = useStore((state) => state.cards);
  const setCards = useStore((state) => state.setCards);
  const columnCards = useMemo(
    () => cards.filter((card) => card?.column === column),
    [cards, column]
  );

  const onMouseEnter = () => {
    setActive(true);
  };
  const onMouseLeave = () => {
    setActive(false);
  };

  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id === over?.id) return;

    const oldIndex = cards.findIndex((card) => card?.id === active.id);
    const newIndex = cards.findIndex((card) => card?.id === over?.id);

    return setCards(arrayMove(cards, oldIndex, newIndex));
  };

  return (
    <div
      className="w-56 shrink-0"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <header className="flex justify-between items-center py-2">
        <h3 className={cn(headingColor, "font-semibold")}>{title}</h3>
        <span className="text-neutral-500 font-bold">{columnCards.length}</span>
      </header>
      <div
        className={cn(
          "h-full w-full bg-neutral-800/0 transition-colors rounded",
          active && "bg-neutral-800/50"
        )}
      >
        <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
          <SortableContext
            items={columnCards}
            strategy={verticalListSortingStrategy}
          >
            {columnCards.map((card) => (
              <Card
                key={`card-${card.id}`}
                title={card.title}
                cardId={card.id}
              />
            ))}
          </SortableContext>
        </DndContext>
        <Separator />
        <AddCard column={column} />
      </div>
    </div>
  );
};

export default Column;
