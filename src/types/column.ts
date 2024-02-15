export type TCardColumn = TCard["column"];

export type TCard = {
  title: string;
  id: string;
  column: "backlog" | "todo" | "doing" | "done";
};

export type TColumn = {
  title: string;
  headingColor: string;
  column: TCardColumn;
};
