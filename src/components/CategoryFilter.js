import React from 'react';

const CategoryFilter = ({ categories }) => {
  return (
    <div>
      {categories.map((category, index) => (
        <button key={index}>{category}</button>
      ))}
    </div>
  );
};

export default CategoryFilter;
