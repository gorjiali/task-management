import * as React from "react";
import PropTypes from "prop-types";

function TaskCard({task}) {
  const {title, description, status} = task;

  return (
    <article>
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{status}</span>
      <button>Edit</button>
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
