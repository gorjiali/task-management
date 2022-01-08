import * as React from "react";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

function Home() {
  const [tasks, setTasks] = React.useState([]);

  function addNewTask(newTask) {
    setTasks([
      newTask,
      ...tasks,
    ]);
  }

  return (
    <main>
      <NewTaskForm onAddNewTask={addNewTask} />
      <TaskList tasks={tasks} />
    </main>
  );
}

export default Home;
