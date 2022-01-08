function Home() {
  return (
    <main>
      <section>
        <h2>Add a new Task</h2>
        <form>
          <label htmlFor="newTaskTitle">Title</label>
          <input type="text" id="newTaskTitle" />
          <label htmlFor="newTaskDescription">Description</label>
          <textarea id="newTaskDescription"></textarea>
          <button type="submit">+ Add</button>
        </form>
      </section>
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
    </main>
  );
}

export default Home;
