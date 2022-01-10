import * as React from "react";
import {useHistory, useParams, Link} from "react-router-dom";
import {TasksContext} from "../contexts/TasksContext";
import {getAllowedStatusTransitions} from "../utils/helpers";
import styles from "./Edit.module.scss";
import {ReactComponent as EditIcon} from "./../assets/svgIcons/squareEditOutline.svg";
import BaseTextField from "./Base/BaseTextField";
import BaseTextArea from "./Base/BaseTextArea";
import BaseSelectBox from "./Base/BaseSelectBox";
import BaseButton from "./Base/BaseButton";

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
    if (task.title && task.description) {
      editTask({...task, status: selectedStatus});
      history.push("/");
    }
  }

  if (!task) return (
  <p className={styles.emptyMsg}>
    There is no task for this id! please back to 
    <Link className={styles.homeLink} to="/">🏠</Link>
  </p>
  );
  return (
    <section className={styles.container}>
      <h2 className={styles.header}>Edit Task</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <BaseTextField
          type="text"
          label="Title"
          value={task.title}
          onChange={(event) => handleOnChange(event, "title")}
        />
        <BaseTextArea
          height="100%"
          label="Description"
          value={task.description}
          onChange={(event) => handleOnChange(event, "description")}
        ></BaseTextArea>
        <BaseSelectBox
          value={task.selectedStatus}
          onChange={(event) => setSelectedStatus(event.target.value)}
        >
          <option>{task.status}</option>
          {getAllowedStatusTransitions(task.status).map((status) => (
            <option key={status}>{status}</option>
          ))}
        </BaseSelectBox>
        <div className={styles.actions}>
          <BaseButton disabled={!task.title || !task.description} type="submit">
            <EditIcon width="1rem" fill="#fff" />
            Edit
          </BaseButton>
          <BaseButton
            onClick={() => history.push("/")} 
            colorType="outlined"
          >cancel</BaseButton>
        </div>
      </form>
    </section>
  );
}

export default Edit;
