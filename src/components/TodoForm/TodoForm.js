
import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [task, setTask] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    addTodo(task);
    setTask("");
  };
  return (
    <form onSubmit={submit}>
      <input className=""
        type="text"
        placeholder="Add a new todo"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button class="btn" type="submit">add</button>
    </form>
  );

}

export default TodoForm;