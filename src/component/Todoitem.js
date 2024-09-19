import React from "react";

const TodoItem = ({
  id,
  title,
  handleDelete,
  handleEdit,
  toggleComplete,
  completed,
  handleDate,
}) => {
  return (
    // <>
    //   <div className="flex justify-start items-center">
    //     {/* <div className="flex items-center"> */}
    //     {/* <li className="list-group-item d-flex justify-content-between"> */}
    //     {/* <div className="todo-item-content"> */}
    //     <input
    //       type="checkbox"
    //       checked={completed}
    //       onChange={() => toggleComplete(id)}
    //       id={`todo-item-${id}`}
    //       className="mr-2"
    //     />
    //     <label
    //       htmlFor={`todo-item-${id}`}
    //       className={`todo-title ${completed ? "completed" : ""}`}
    //       style={{ textDecoration: completed ? "line-through" : "none" }}
    //     >
    //       {title}
    //     </label>
    //     <div className="flex justify-end ">
    //       <span className="mx-2 text-success" onClick={handleEdit}>
    //         <i className="fas fa-user-edit"></i>
    //       </span>
    //       <span className="mx-2 text-danger" onClick={handleDelete}>
    //         <i className="fas fa-trash"></i>
    //       </span>
    //     </div>
    //     <p className="created">Created on: {handleDate}</p>
    //     {/* </div> */}

    //     {/* </li> */}
    //     {/* </div> */}
    //     {/* </div> */}

    //     {/* <div className="todo-icon"> */}

    //     {/* </div> */}
    //   </div>

    // </>

    <>
      <div className="flex items-center justify-between border px-4 py-2 bg-white">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleComplete(id)}
          id={`todo-item-${id}`}
          className="mr-2"
        />

        <label
          htmlFor={`todo-item-${id}`}
          className={`${completed ? "line-through" : ""}`}
          style={{ textDecoration: completed ? "line-through" : "none" }}
        >
          {title}
        </label>

        <span className="mx-2 text-success" onClick={handleEdit}>
          <i className="fas fa-user-edit"></i>
        </span>
        <span className="mx-2 text-danger" onClick={handleDelete}>
          <i className="fas fa-trash"></i>
        </span>
        <p className="created">Created on: {handleDate}</p>
      </div>
    </>
  );
};

export default TodoItem;
