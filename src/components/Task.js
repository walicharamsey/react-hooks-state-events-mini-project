import React from 'react';

const Task = ({ text, category, onDelete }) => {
  const handleDelete = () => {
    onDelete();
  };

  return (
    <div>
      <p>{text}</p>
      <p>{category}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Task;
