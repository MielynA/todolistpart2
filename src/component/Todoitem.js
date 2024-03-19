import React from "react";

const TodoItem = ({ id,  title, handleDelete, handleEdit , toggleComplete, completed}) => {
  console.log('completed', completed)
  return (
    <li className="list-group-item d-flex justify-content-between">
      <div className="todo-item-content">
      <input type="checkbox" checked={completed} onChange={() =>toggleComplete(id)} id={`todo-item-${id}`}/>
      <label htmlFor={`todo-item-${id}`} className={`todo-title ${completed ? 'completed' : ''}`} style={{ textDecoration: completed ? 'line-through' : 'none' }}>
          {title}
        </label>
     
        </div>
      <div className="todo-icon">
        <span className="mx-2 text-success" onClick={handleEdit}>
          <i className="fas fa-user-edit"></i>
        </span>
        <span className="mx-2 text-danger" onClick={handleDelete}>
          <i className="fas fa-trash"></i>
        </span>
      </div>
    </li>
  );
};

export default TodoItem;
