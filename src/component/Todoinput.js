import React, { useState } from "react";

const TodoInput = ({ item, handleChange, handleSubmit }) => {
  const [showError, setShowError] = useState(false);

  const handleInputChange = (e) => {
    handleChange(e);

    setShowError(e.target.value.trim() === "");
  };

  return (
    <div className="card card-body my-3">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-group-prepend">
            <button
              type="submit"
              className=" fas fa-pencil-alt"
              onSubmit={handleSubmit}
            />
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Add what's on your mind"
            value={item}
            onChange={handleInputChange}
          />
        </div>
      </form>
      {showError && (
        <div className="alert alert-warning mt-2" role="alert">
          Inputs cannot be empty
        </div>
      )}
    </div>
  );
};

export default TodoInput;
