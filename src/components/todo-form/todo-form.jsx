import { React, useState } from "react";
import shortid from "shortid";

const TodoForm = (props) => {
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit({
      id: shortid.generate(),
      text: text,
      complete: false,
    });
    setText("");
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className="input-field" type="text" onChange={handleChange} value={text} />
      <button className="add-todo-btn" onClick={handleSubmit}>
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
