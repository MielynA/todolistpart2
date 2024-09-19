import React from "react";
import Todoitem from "./Todoitem";

const TodoList = ({
  items,
  handleClear,
  handleDelete,
  handleEdit,
  toggleComplete,
}) => {
  return (
    <div className="my-5 flex flex-col justify-center items-center">
      {items.map((item) => {
        return (
          <Todoitem
            key={item.id}
            id={item.id}
            title={item.title}
            handleDelete={() => handleDelete(item.id)}
            handleEdit={() => handleEdit(item.id)}
            completed={item.completed}
            handleDate={item.created}
            toggleComplete={() => toggleComplete(item.id)}
          />
        );
      })}
      <div className="w-full flex justify-center mt-5 blue">
        <button
          className="bg-red py-2 px-4 rounded hover:bg-red"
          onClick={handleClear}
        >
          Clear All
        </button>
      </div>
    </div>
  );
};

export default TodoList;
