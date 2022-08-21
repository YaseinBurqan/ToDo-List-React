import React from "react";

const todo = (props) => {
  return (
    <>
      <div className="d-f">
        <div style={{ textDecoration: props.todoValue.complete ? "line-through" : "" }} onClick={props.handleComplete}>
          {props.todoValue.text}
        </div>
        <button className="delete-btn" onClick={props.onDelete}>
          X
        </button>
      </div>
    </>
  );
};

export default todo;
