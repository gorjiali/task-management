import * as React from "react";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import styles from "./Home.module.scss";

function Home() {
  return (
    <main className={styles.main}>
      <NewTaskForm />
      <TaskList />
    </main>
  );
}

export default Home;
