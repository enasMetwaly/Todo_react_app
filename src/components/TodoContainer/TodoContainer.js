import { useEffect, useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";

function TodoContainer() {
    const [todos, setTodos] = useState([]);

    const addTodo = (task) => {
      setTodos([...todos, task]);
    };
  
    const deleteTodo = (index) => {
      const updatedTodos = [...todos];
      updatedTodos.splice(index, 1);
      setTodos(updatedTodos);
    };
  
    return (
        <div class="container m-5 p-2 rounded mx-auto bg-light shadow">
      <div className="d-flex justify-content- center  flex-column    align-items-center m-5">
        <h2>Todo List</h2>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      </div>
      </div>
    );
  
  
  
  
  
  
  
}

export default TodoContainer;
