import * as React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./TaskCard.module.scss";
import {ReactComponent as EditIcon} from "./../assets/svgIcons/squareEditOutline.svg";
import {getTrimmed} from "./../utils/helpers";

function TaskCard({task}) {
  const {id, title, description, status} = task;

  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{getTrimmed(description, 60)}</p>
      <div className={styles.footer}>
        <span className={styles.status}>{status}</span>
        <Link className={styles.action} to={`/edit/${id}`}>
          <EditIcon />
        </Link>
      </div>
    </article>
  );
}

TaskCard.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default TaskCard;
