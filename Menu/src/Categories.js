import React from 'react';
//map over categories
//create button for each category
//return fileter Items with each button
const Categories = ({ sortedItems, categories }) => {
  return (
    <div className='btn-container'>
      {categories.map((e, index) => {
        return (
          <button type='button' className='filter-btn' key={index} onClick={() => sortedItems(e)}>
            {e}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
