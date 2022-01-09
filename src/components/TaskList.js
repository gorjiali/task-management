import * as React from "react";
import TaskCard from "./TaskCard";
import {TasksContext} from "../contexts/TasksContext";

function TaskList() {
  const {tasks} = React.useContext(TasksContext);

  return (
    <section>
      <h2>Tasks</h2>
      <div>
        {!tasks.length ? (
          <p>there is no task!</p>
        ) : (
          tasks.map((task) => <TaskCard key={task.id} task={task} />)
        )}
      </div>
    </section>
  );
}

export default TaskList;
