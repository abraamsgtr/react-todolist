import React, { useState } from "react";

const Todo = (props) => {
  const [deleteClass, setDeleteClass] = useState("");
  //Events
  const handleDelete = (e) => {
    setDeleteClass("fall");

    setTimeout(() => {
      props.setTodos((prevValues) => {
        return prevValues.filter((todo, index) => {
          return todo.id !== props.id;
        });
      });
    }, 800);
  };
  const handleComplete = (e) => {
    props.setTodos((prevValues) => {
      return prevValues.map((todo, index) => {
        if (todo.id === props.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      });
    });
  };
  return (
    <div className={`todo ${deleteClass}`}>
      <li className={`todo-item ${props.todo.completed && "completed"}`}>
        {String(props.text)}
      </li>
      <button onClick={handleComplete} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={handleDelete} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
