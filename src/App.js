import "./App.scss";
import { React, useState } from "react";
import TodoForm from "./components/todo-form/todo-form";
import Todo from "./components/todo/todo";

function App() {
  let [todos, setTodos] = useState([]);
  const [todoToShow, setTodoToShow] = useState("all");
  const [makeAllComplete, setMakeAllComplete] = useState(true);

  const handleAddTodo = (todoValue) => {
    setTodos([todoValue, ...todos]);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todoValue) => todoValue.id !== id));
  };

  const updateTodoShow = (string) => {
    setTodoToShow(string);
  };

  const handleComplete = (id) => {
    setTodos(
      todos.map((todoValue) => {
        if (todoValue.id === id) {
          return {
            ...todoValue,
            complete: !todoValue.complete,
          };
        } else {
          return todoValue;
        }
      })
    );
  };

  const handleRemoveAllTodosAreComplete = () => {
    setTodos(todos.filter((todoValue) => !todoValue.complete));
  };

  const handleMakeAllTodosComplete = () => {
    setTodos(
      todos.map((todoValue) => ({
        ...todoValue,
        complete: true,
      }))
    );
    setMakeAllComplete(!makeAllComplete);
  };

  if (todoToShow === "active") {
    todos = todos.filter((todoValue) => !todoValue.complete);
  } else if (todoToShow === "complete") {
    todos = todos.filter((todoValue) => todoValue.complete);
  }

  return (
    <>
      <div className="App">
        <TodoForm onSubmit={handleAddTodo} />
        {todos.map((todoValue) => (
          <Todo key={todoValue.id} todoValue={todoValue} onDelete={() => handleDelete(todoValue.id)} handleComplete={() => handleComplete(todoValue.id)} />
        ))}

        <div className="allUpdate-btn">
          <div className="update-btn" onClick={() => updateTodoShow("all")}>
            All
          </div>
          <div className="update-btn" onClick={() => updateTodoShow("active")}>
            Active
          </div>
          <div className="update-btn" onClick={() => updateTodoShow("complete")}>
            Complete
          </div>
        </div>
        <div className="remove-make-btn">
          {todos.some((todoValue) => todoValue.complete) ? (
            <button className="remove-all-complete" onClick={handleRemoveAllTodosAreComplete}>
              Remove all complete
            </button>
          ) : null}
          <button className="make-update-btn" onClick={handleMakeAllTodosComplete}>
            Make all complete:{`${makeAllComplete}`}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
