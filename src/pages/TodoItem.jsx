import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { BsTrash } from 'react-icons/bs';

function TodoItem({ task, completeTask, deleteTask }) {
  const handleComplete = () => {
    completeTask(task.id);
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <Card className="mb-3v container ms-auto mb-3 shadow">
      <Card.Body>
        <div className="d-flex align-items-center">
          <input
            className="form-check-input me-2 shadow"
            type="checkbox"
            checked={task.completed}
            onChange={handleComplete}
          />
          <span
            className={`flex-grow-1 ${task.completed ? 'text-decoration-line-through' : ''}`}
          >
            {capitalizeFirstLetter(task.title)}
          </span>
          <Button variant="link" className="p-0 text-dark" onClick={handleDelete}>
            <BsTrash size={20} />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default TodoItem;
