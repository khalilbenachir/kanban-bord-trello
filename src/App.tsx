import Column from "./components/column";
import DeleteColumn from "./components/delete-column";

const App = () => {
  return (
    <main className="min-h-screen w-full bg-neutral-900 p-6 pt-20 flex gap-4 overflow-auto">
      <Column
        title="Backlog"
        headingColor="text-neutral-500"
        column="backlog"
      />
       <Column
        title="TODO"
        headingColor="text-yellow-200"
        column="todo"
      />
       <Column
        title="In progress"
        headingColor="text-blue-200"
        column="doing"
      />
       <Column
        title="Complete"
        headingColor="text-emerald-200"
        column="done"
      />
      <DeleteColumn />
    </main>
  );
};

export default App;
