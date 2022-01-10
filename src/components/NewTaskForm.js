import * as React from "react";
import {v4 as uuidv4} from "uuid";
import {TasksContext} from "../contexts/TasksContext";
import styles from "./NewTaskForm.module.scss";
import BaseTextArea from "./Base/BaseTextArea";
import BaseTextField from "./Base/BaseTextField";
import BaseButton from "./Base/BaseButton";
import {ReactComponent as PlusIcon} from "./../assets/svgIcons/plus.svg";

function NewTaskForm() {
  const {addTask} = React.useContext(TasksContext);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (title && description) {
      addTask({
        id: uuidv4(),
        status: "ToDo",
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
    <section className={styles.container}>
      <h2 className={styles.formHeader}>Add a new Task</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.titleInput}>
          <BaseTextField
            label="Title"
            type="text"
            value={title}
            maxLength="20"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.desInput}>
          <BaseTextArea
            label="Description"
            rows="5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className={styles.action}>
          <BaseButton disabled={!title || !description} type="submit">
            <PlusIcon fill="#fff" width="1rem" />
            Add
          </BaseButton>
        </div>
      </form>
    </section>
  );
}

export default NewTaskForm;
