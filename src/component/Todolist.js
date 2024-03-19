import React from "react";
import Todoitem from "./Todoitem";

const TodoList = ({ items, handleClear, handleDelete, handleEdit , toggleComplete , completed}) => {
  return (
    <ul className="list-group my-5">
      <h3 className="text-center mb-4">Current list</h3>

      {items.map((item) => {
        return (
          <Todoitem
            key={item.id}
            id={item.id}
            title={item.title}
            handleDelete={() => handleDelete(item.id)}
            handleEdit={() => handleEdit(item.id)}
            completed={item.completed}
            toggleComplete={ () => toggleComplete(item.id)}
          />
        );
      })}
      <div className="row justify-content-center">
        <button
          type="button"
          className="btn btn-danger mt-5"
          onClick={handleClear}
        >
          Clear All
        </button>
      </div>
    </ul>
  );
};

export default TodoList;
