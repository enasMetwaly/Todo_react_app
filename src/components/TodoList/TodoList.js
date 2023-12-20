import { useEffect, useState } from "react";
import './Todo.css'; // Import the CSS file



function TodoList({ todos, deleteTodo }) {
    return (
      <ul className="list-group w-75 d-flex  justify-content-between ">
        {todos.map((todo, index) => (
          <li className="list-group-item list-group-item-info position-relative " key={index}>
            {todo}
            <button className=" mybtn position-absolute end-0 bg-secondary text-light" onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }
  
  export default TodoList;