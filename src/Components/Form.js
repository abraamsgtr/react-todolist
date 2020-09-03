import React from "react";

const Form = (props) => {
  const handleInputText = (e) => {
    props.setInputText(e.target.value);
  };
  const handleSubmitTodo = (e) => {
    e.preventDefault();
    props.setTodos([
      ...props.todos,
      {
        text: props.inputText,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
    props.setInputText("");
  };
  const handleStatus = (e) => {
    props.setStatus(e.target.value);
    // props.handleFilter();
  };
  return (
    <form>
      <input
        onChange={handleInputText}
        type="text"
        className="todo-input"
        value={props.inputText}
      />
      <button onClick={handleSubmitTodo} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={handleStatus} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
