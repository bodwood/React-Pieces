import React, { useState } from 'react'
import data from './data'
import SingleQuestion from './Question'

function App() {
  const [questions, setQuestions] = useState(data)
  return (
    <main>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <section className='info'>
          {data.map((questions) => {
            return <SingleQuestion key={questions.id} {...questions} />
          })}
        </section>
      </div>
    </main>
  )
}

export default App
