import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Question = (data) => {
  const {id, title, info} = data;
  return (
    <div key={id}>
      <h1>{title}</h1>
      <h2>{info}</h2>
    </div>
  )
}

export default Question
