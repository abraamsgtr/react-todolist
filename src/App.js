import React, { useState, useEffect } from "react";
import "./App.css";
///Importing components
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  ///Run once when the app start
  useEffect(() => {
    getLocalTodos();
  }, []);
  //Functions
  const handleFilter = () => {
    switch (status) {
      case "completed":
        setFilteredTodos((prevValues) => {
          return todos.filter((todo) => {
            return todo.completed === true;
          });
        });
        break;
      case "uncompleted":
        setFilteredTodos((prevValues) => {
          return todos.filter((todo) => {
            return todo.completed === false;
          });
        });
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  //Save to local storage
  const saveToLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      const localTodos = JSON.parse(
        localStorage.getItem("todos", JSON.stringify(todos))
      );
      setTodos(localTodos);
    }
  };
  //Use effect
  useEffect(() => {
    handleFilter();
    saveToLocalStorage();
  }, [todos, status]);
  return (
    <div className="App">
      <header>
        <h3>My Todo List Remaster</h3>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
