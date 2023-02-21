import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

//get image, name, title, quote
//move through ids with button click
//buttons can increments or decrement
//auto button click can occur

function App() {
  const [index, setIndex] = useState(0);
  const [person, setPerson] = useState(data)

  
  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>Reviews
        </h2>
      </div>
      <div className='section-center'>
        {person.map((e, eIndex) => {
          const { id, image, name, title, quote } = e;
          let position = 'nextSlide'
          if(eIndex === index)
          {
            position = 'activeSlide'
          }

          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className='person-img' />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          );
        })}
        <button className='prev'>
          <FiChevronLeft />
        </button>
        <button className='next'>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
