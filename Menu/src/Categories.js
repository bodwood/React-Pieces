import React from 'react';
import items from './data';
//map over categories
//create button for each category
//return fileter Items with each button
const Categories = ({ filterItems }) => {
  const cats = [...new Set(items.map((e) => e.category))];
  return (
    <div className='btn-container'>
      {items.map((e) => {
        const { category } = e;
        return (
          <div>
            <button className='filter-btn' 
              onClick={() => {
                filterItems(category);
              }}>
            <> {category}</>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
