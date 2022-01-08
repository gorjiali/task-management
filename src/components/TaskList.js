import * as React from "react";
import TaskCard from "./TaskCard";

function TaskList() {
  return (
    <section>
      <h2>Tasks</h2>
      <div>
        <TaskCard
          task={{
            id: "1",
            title: "Task title goes here",
            description:
              "Task description goes here if test size is more than 3, paragraphs it is trimmed",
            status: "Todo",
          }}
        />
        <TaskCard
          task={{
            id: "2",
            title: "Task title goes here",
            description:
              "Task description goes here if test size is more than 3, paragraphs it is trimmed",
            status: "Todo",
          }}
        />
        <TaskCard
          task={{
            id: "3",
            title: "Task title goes here",
            description:
              "Task description goes here if test size is more than 3, paragraphs it is trimmed",
            status: "Todo",
          }}
        />
        <TaskCard
          task={{
            id: "4",
            title: "Task title goes here",
            description:
              "Task description goes here if test size is more than 3, paragraphs it is trimmed",
            status: "Todo",
          }}
        />
      </div>
    </section>
  );
}

export default TaskList;
