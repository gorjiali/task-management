import React from "react";

const TasksContext = React.createContext();

function TasksContextProvider(props) {
  const [tasks, setTasks] = React.useState([]);

  const addTask = React.useCallback(
    (newTask) => setTasks((tasks) => [newTask, ...tasks]),
    [setTasks]
  );

  const editTask = React.useCallback((editedTask) =>
    setTasks((prevTasks) =>
      prevTasks.map((prevTask) =>
        prevTask.id === editedTask.id ? editedTask : prevTask
      )
    ),
    [setTasks]
  );

  const value = React.useMemo(() => {
    return {
      tasks,
      addTask,
      editTask
    };
  }, [tasks, addTask, editTask]);

  return <TasksContext.Provider value={value} {...props} />;
}

export {TasksContext, TasksContextProvider};
