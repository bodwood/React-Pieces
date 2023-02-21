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
  const [person, setPerson] = useState(data);

  useEffect(()=> {
    const lastIndex = person.length - 1;
    if(index < 0) {
      setIndex(lastIndex);
    }
    if(index > lastIndex)
    {
      setIndex(0)
    }
  }, [index, person])

useEffect(()=>{
 let slider = setInterval(() => {
    setIndex(index +1)
  }, 3000);
  return ()=> clearInterval(slider);
}, [index])

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
          let position = 'nextSlide';
          if (eIndex === index) {
            position = 'activeSlide';
          }
          if (eIndex === index - 1 || (index === 0 && eIndex === e.length - 1)) {
            position = 'lastSlide';
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
        <button className='prev' onClick={()=> setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={()=> setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
