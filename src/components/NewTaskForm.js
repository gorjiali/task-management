function NewTaskForm() {
  return (
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
  )
}

export default NewTaskForm;