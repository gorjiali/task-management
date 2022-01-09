import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function TaskCard({task}) {
  const {id, title, description, status} = task;

  return (
    <article>
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{status}</span>
      <Link to={`/edit/${id}`}>Edit</Link>
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
