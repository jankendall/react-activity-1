import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./TodoApp";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

function Index() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/todoitem" element={<TodoItem />} />
        <Route path="/todoform" element={<TodoForm />} />
      </Routes>
    </Router>
  );
}

export default Index;
