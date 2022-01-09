import * as React from "react";
import {v4 as uuidv4} from "uuid";
import {TasksContext} from "../contexts/TasksContext";

function NewTaskForm() {
  const {addTask} = React.useContext(TasksContext);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (title && description) {
      addTask({
        id: uuidv4(),
        status: "Todo",
        title,
        description,
      });
      resetForm();
    }
  }

  function resetForm() {
    setTitle("");
    setDescription("");
  }

  return (
    <section>
      <h2>Add a new Task</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newTaskTitle">Title</label>
        <input
          type="text"
          id="newTaskTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="newTaskDescription">Description</label>
        <textarea
          id="newTaskDescription"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button disabled={!title || !description} type="submit">
          + Add
        </button>
      </form>
    </section>
  );
}

export default NewTaskForm;
