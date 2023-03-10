import React, { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]

  const checkNumber = (number) => {
    if(number > people.length-1)
    {
      return 0
    }
    if(number < 0)
    {
      return people.length-1
    }
    return number;
  }

  const nextPerson = () => {
    setIndex((index) => {
      const nextIndex = index + 1
      return checkNumber(nextIndex)
    })
  }

  const prevPerson = () => {
    setIndex((index) => {
      const prevIndex = index - 1
      return checkNumber(prevIndex)
    })
  }

  const randomPerson = () => {
    setIndex((index) => {
      const randPerson = Math.floor(Math.random() * (people.length-1))
      if(index === randPerson)
      {
        index = index + 1;
        return checkNumber(index);
      }
      return randPerson
    })
  }

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={() => prevPerson(index)}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={() => nextPerson(index)}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={() => randomPerson(index)}>
        Random Person
      </button>
    </article>
  )
}

export default Review
