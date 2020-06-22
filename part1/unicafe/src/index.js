import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({header}) => <h1>{header}</h1>

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
    {text}
    </button>
    )

const Stats = ({label, count}) => <p>{label} {count}</p>

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  // header names
  const headers = {
      feedback: 'Give Feedback',
      stats: 'Statistics'
  }
  
  //labels
  const labels = {
      good:'Good',
      neutral:'Neutral',
      bad:'Bad'
  }
  
  //Add one to the count for a given label
  const addOne = (label, setLabel) => () => setLabel(label + 1) 

  return (
    <div>
      <Header header={headers.feedback} />
      <Button handleClick={addOne(good, setGood)} text={labels.good} />
      <Button handleClick={addOne(neutral, setNeutral)} text={labels.neutral} />
      <Button handleClick={addOne(bad, setBad)} text={labels.bad} />
      <Header header={headers.stats} />
      <Stats label={labels.good} count={good} />
      <Stats label={labels.neutral} count={neutral} />
      <Stats label={labels.bad} count={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)