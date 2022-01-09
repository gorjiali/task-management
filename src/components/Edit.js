import * as React from "react";
import {useHistory, useParams, Link} from "react-router-dom";
import {TasksContext} from "../contexts/TasksContext";
import {getAllowedStatusTransitions} from "../utils/helpers";

function Edit() {
  const history = useHistory();
  const {taskId} = useParams();
  const {tasks, editTask} = React.useContext(TasksContext);

  // useState lazy initialation for find related task
  const [task, setTask] = React.useState(() =>
    tasks.find((task) => task.id === taskId)
  );
  const [selectedStatus, setSelectedStatus] = React.useState(task?.status);

  function handleOnChange(event, key) {
    setTask((prevTask) => ({...prevTask, [key]: event.target.value}));
  }

  function handleSubmit(event) {
    event.preventDefault();
    editTask({...task, status: selectedStatus});
    history.push("/");
  }

  if (!task) return <p>There is no task with this url!</p>;
  return (
    <section>
      <h2>Add a new Task</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newTaskTitle">Title</label>
        <input
          type="text"
          id="newTaskTitle"
          value={task.title}
          onChange={(event) => handleOnChange(event, "title")}
        />
        <label htmlFor="newTaskDescription">Description</label>
        <textarea
          id="newTaskDescription"
          value={task.description}
          onChange={(event) => handleOnChange(event, "description")}
        ></textarea>
        <select
          value={task.selectedStatus}
          onChange={(event) => setSelectedStatus(event.target.value)}
        >
          <option>{task.status}</option>
          {getAllowedStatusTransitions(task.status).map((status) => (
            <option key={status}>{status}</option>
          ))}
        </select>
        <button disabled={!task.title || !task.description} type="submit">
          ✏️ edit
        </button>
        <Link to="/">✖️ cancel</Link>
      </form>
    </section>
  );
}

export default Edit;
