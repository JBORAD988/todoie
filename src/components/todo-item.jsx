import React from "react";

const TodoItem = (todo) => {
    return (
    <li className="Todo-Item">
        <span>
        <input type="checkbox" />
        <span className="todo-item-text">{todo.text}</span>
        </span>
      
        <p>...</p>
    </li>
    
    );
    };

export default TodoItem;