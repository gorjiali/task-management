import * as React from "react";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

function Home() {
  return (
    <main>
      <NewTaskForm />
      <TaskList />
    </main>
  );
}

export default Home;
