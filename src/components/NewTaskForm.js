import React, { useState } from 'react';

const NewTaskForm = ({ categories, onTaskFormSubmit }) => {
  const [details, setDetails] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onTaskFormSubmit({ text: details, category });
    setDetails('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="detailsInput">Details:</label>
      <input
        id="detailsInput"
        type="text"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
      />
      <label htmlFor="categorySelect">Category:</label>
      <select
        id="categorySelect"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Select a category</option>
        {categories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button type="submit">Add task</button>
    </form>
  );
};

export default NewTaskForm;
