import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(data);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const numData = formData.get('numberInput')
    console.log(numData);
    setCount(numData)
    
    
  }
  
  return (
  <div>
    <h1>Tired of boring lorem ipsum?</h1>
    <form action="submit" onSubmit={handleSubmit}>
      <label htmlFor="number">Paragraphs</label>
      <input type="number" name="numberInput" id="number" />
      <button type='submit' name='numberInput' className='btn' >Generate</button>
    </form>
    <p>
      {value.map((e) => {
        const {text} = e;
        return text

      })}
    </p>
  </div>
    )
}

export default App;
