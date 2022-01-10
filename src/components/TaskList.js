import * as React from "react";
import TaskCard from "./TaskCard";
import {TasksContext} from "../contexts/TasksContext";
import styles from "./TaskList.module.scss";

function TaskList() {
  const {tasks} = React.useContext(TasksContext);

  return (
    <section className={styles.container}>
      <h2 className={styles.header}>Tasks</h2>
      <div className={styles.listWrapper}>
        {!tasks.length ? (
          <div className={styles.emptyMsg}>
            <span>You have nothing to do.</span>
            <span>Go get some sleep.</span>
          </div>
        ) : (
          <div className={styles.list}>
            {tasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default TaskList;
