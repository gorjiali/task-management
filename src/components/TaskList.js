import * as React from "react";
import PropTypes from "prop-types";
import TaskCard from "./TaskCard";

function TaskList({tasks}) {
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

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default TaskList;
