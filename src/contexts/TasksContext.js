import React from "react";

const TasksContext = React.createContext();

function TasksContextProvider(props) {
  const [tasks, setTasks] = React.useState([]);

  const addTask = React.useCallback(
    (newTask) => setTasks((tasks) => [newTask, ...tasks]),
    [setTasks]
  );

  const value = React.useMemo(() => {
    return {
      tasks,
      addTask,
    };
  }, [tasks]);
  
  return <TasksContext.Provider value={value} {...props} />;
}

export {TasksContext, TasksContextProvider};
