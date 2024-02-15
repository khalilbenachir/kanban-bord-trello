import { cn } from "@/lib/utils";
import { Flame, Trash } from "lucide-react";
import { useState } from "react";

const DeleteColumn = () => {
  const [active, setActive] = useState(false);
  const onMouseEnter = () => {
    setActive(true);
  };
  const onMouseLeave = () => {
    setActive(false);
  };

  return (
    <section
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={cn(
        "w-56 h-56 mt-10 shrink-0 flex justify-center items-center border transition-colors rounded border-neutral-700 text-neutral-500",
        active && "text-red-500 border-red-800 bg-red-800/20"
      )}
    >
      {active ? (
        <Flame className="animate-bounce h-7 w-7" />
      ) : (
        <Trash className="h-7 w-7" />
      )}
    </section>
  );
};

export default DeleteColumn;
