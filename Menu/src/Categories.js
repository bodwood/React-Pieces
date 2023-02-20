import React from 'react';
//map over categories
//create button for each category
//return fileter Items with each button
const Categories = ({ categories, filterItems }) => {
  return (
    <div className='btn-container'>
      {categories.map((category, index) => {
        return (
          <button
            type='button'
            className='filter-btn'
            key={index}
            onClick={() => 
              filterItems(category)
            }
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
