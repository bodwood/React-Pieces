import React, { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]

  const nextPerson = () => {
    const currentIndex = index
    const nextIndex = currentIndex + 1
    console.log(currentIndex)
    if(nextIndex > people.length-1)
    {
      setIndex(0);
    }else{
      setIndex(nextIndex)
    }
  }

  const prevPerson = () => {
     const currentIndex = index
     const prevIndex = currentIndex - 1
     if(prevIndex < 0)
     {
      setIndex(people.length-1)
     }else{
      setIndex(prevIndex)
     }
  }

  const randomPerson = () => {
    const randPerson = Math.floor(Math.random() * (3-0+1) + 0)
    console.log(randPerson)
    setIndex(randPerson)
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
      <button onClick={() => nextPerson()}>Next</button>
      <button onClick={() => prevPerson()}>Prev</button>
      <button onClick={()=> randomPerson()}>Random Person</button>
    </article>
  )
}

export default Review
