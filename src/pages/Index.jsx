import React from "react";
import TodoApp from "./TodoApp";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

function Index() {
  return (
    <>
      <TodoApp />
      <TodoList />
      <TodoItem />
      <TodoForm />
    </>
  );
}

export default Index;
