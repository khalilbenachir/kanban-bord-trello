import { FormEventHandler, MouseEventHandler, useState } from "react";
import { PlusCircle } from "lucide-react";

import { useStore } from "@/actions/column";
import { TColumn } from "@/types/column";

export const AddCard = ({ column }: Partial<TColumn>) => {
  const [isEditingMode, setEditingMode] = useState(false);
  const [description, setDescription] = useState("");
  const addCard = useStore((state) => state.addCard);

  if (!column) return null;

  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (!description.trim()) return;

    addCard(description, column);

    setEditingMode(false);
    setDescription("");
  };

  const onReset: MouseEventHandler<HTMLButtonElement> | undefined = (event) => {
    event.preventDefault();

    setDescription("");
    setEditingMode(false);
  };

  if (!isEditingMode)
    return (
      <button
        className="flex items-center text-white text-sm p-2 mt-2 w-full"
        onClick={() => setEditingMode(true)}
      >
        <PlusCircle className="h-4 w-4 mr-2" /> add Card
      </button>
    );

  return (
    <section className="mt-2 w-full">
      <form
        className="flex flex-col gap-3"
        onSubmit={onSubmit}
      >
        <textarea
          value={description}
          autoFocus
          placeholder="add new task ..."
          onChange={(event) => setDescription(event.target?.value)}
          className="bg-violet-400/20 border rounded border-violet-400 placeholder:text-violet-300 w-full text-white text-sm p-2 focus:outline-0"
        />
        <div className="flex justify-end items-center gap-2">
          <button
            className="text-white text-sm border rounded px-2 py-1 border-slate-200"
            onClick={onReset}
          >
            Close
          </button>
          <button
            className="text-sm bg-slate-200 border rounded px-2 py-1"
            type="submit"
          >
            Add Card
          </button>
        </div>
      </form>
    </section>
  );
};
