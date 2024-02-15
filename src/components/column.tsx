import { useMemo, useState } from "react";

import { cn } from "@/lib/utils";
import { useStore } from "@/actions/column";
import { TColumn } from "@/types/column";
import Card from "./card";
import Separator from "./separator";
import { AddCard } from "./add-card";

const Column = ({ title, headingColor, column }: TColumn) => {
  const [active, setActive] = useState(false);
  const cards = useStore((state) => state.cards);
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
        {columnCards.map((card) => (
          <Card key={`card-${card.id}`} title={card.title} />
        ))}
        <Separator />
        <AddCard column={column} />
      </div>
    </div>
  );
};

export default Column;
