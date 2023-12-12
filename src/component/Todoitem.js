import React from "react";

const TodoItem = ({ title, handleDelete, handleEdit }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <h6>{title}</h6>
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
