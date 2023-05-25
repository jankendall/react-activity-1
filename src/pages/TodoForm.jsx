import React, { useState } from 'react';

function TodoForm({ addTask }) {
  const [taskTitle, setTaskTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.trim() !== '') {
      addTask(taskTitle);
      setTaskTitle('');
    }
  };

  return (
    <form className='container mx-auto' onSubmit={handleSubmit}>
      <div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control shadow"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder="Enter a task"
          />
          <div className="input-group-append">
            <button type="submit" className="btn btn-primary shadow">
              Add Task
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default TodoForm;
