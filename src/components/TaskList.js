import * as React from "react";

function TaskList() {
  return (
    <section>
      <h2>Tasks</h2>
      <div>
        <article>
          <h3>Task title goes here</h3>
          <p>Task description goes here if test size is more than 3 paragraphs it is trimmed</p>
          <span>Todo</span>
          <button>Edit</button>
        </article>
        <article>
          <h3>Task title goes here</h3>
          <p>Task description goes here if test size is more than 3 paragraphs it is trimmed</p>
          <span>inProgress</span>
          <button>Edit</button>
        </article>
        <article>
          <h3>Task title goes here</h3>
          <p>Task description goes here if test size is more than 3 paragraphs it is trimmed</p>
          <span>Todo</span>
          <button>Edit</button>
        </article>
        <article>
          <h3>Task title goes here</h3>
          <p>Task description goes here if test size is more than 3 paragraphs it is trimmed</p>
          <span>inProgress</span>
          <button>Edit</button>
        </article>
      </div>
    </section>
  );
}

export default TaskList;
