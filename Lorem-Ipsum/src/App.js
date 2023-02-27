import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = 0;
    if(count <= 0)
    {
      amount = 1
    }
    else if(count > 8)
    {
      amount = 8;
    }
    else{
      amount = parseInt(count)
    }
    setValue(data.slice(0, amount));
    console.log(amount)
  };

  return (
    <section className='section-center'>
      <h1>Tired of boring lorem ipsum?</h1>
      <form action='submit' onSubmit={handleSubmit}>
        <label htmlFor='amount'>Paragraphs</label>
        <input type='number' name='numberInput' id='number' value={count} onChange={(e) => setCount(e.target.value)} />
        <button type='submit' className='btn'>
          Generate
        </button>
      </form>
      <article className='lorem-text'>
        {value.map((item, index) => {
          return (
            <div key='index'>
              <p>{item}</p>
            </div>
          );
        })}
      </article>
    </section>
  );
}

export default App;
