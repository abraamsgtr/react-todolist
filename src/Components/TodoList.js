import React from "react";
///Import components
import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {props.filteredTodos.map((item, index) => {
          return (
            <Todo
              text={item.text}
              key={item.id}
              id={item.id}
              todos={props.filteredTodos}
              setTodos={props.setTodos}
              completed={item.completed}
              index={index}
              todo={item}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
