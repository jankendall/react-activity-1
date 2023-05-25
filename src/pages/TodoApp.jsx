// App.js
import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function Home() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const completeTask = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  };

  return (
    <div>
      <h1 className='text-center p-1 my-3 text-dark fw-bold'>To-Do List ✒️</h1>
      <TodoForm addTask={addTask} />
      <TodoList tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} />
    </div>
  );
}

export default Home;
