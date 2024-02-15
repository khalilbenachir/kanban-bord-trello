import { TCard } from "@/types/column";
import Separator from "./separator";

const Card = ({ title }: Partial<TCard>) => {
  return (
    <>
      <Separator />
      <div className="cursor-grab active:cursor-grabbing border-neutral-700 border rounded bg-neutral-800 p-3 w-full">
        <p className="text-white text-sm">{title}</p>
      </div>
    </>
  );
};

export default Card;
