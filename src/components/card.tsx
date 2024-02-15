import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import Separator from "./separator";

const Card = ({ title, cardId }: {title: string, cardId: string}) => {
  const { attributes, setNodeRef, listeners, transform, transition } =
    useSortable({ id: cardId });

  const style = { transition, transform: CSS.Transform.toString(transform) };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Separator />
      <div className="cursor-grab active:cursor-grabbing border-neutral-700 border rounded bg-neutral-800 p-3 w-full">
        <p className="text-white text-sm">{title}</p>
      </div>
    </div>
  );
};

export default Card;
