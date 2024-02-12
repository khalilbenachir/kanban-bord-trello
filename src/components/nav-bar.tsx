import { ModeToggle } from "./mode-toggle";

export const NavBar = () => {
  return (
    <header className="flex items-center justify-between h-[50px] max-w-8xl w-full shadow-sm px-3 py-4 sticky top-0">
      <p className="uppercase font-bold">Kanban</p>
      <ModeToggle />
    </header>
  );
};
