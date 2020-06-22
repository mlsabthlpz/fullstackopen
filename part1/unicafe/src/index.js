import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({header}) => <h1>{header}</h1>

const Button = ({handleClick, sent}) => {
  return (
    <button onClick={handleClick}>
    {sent.name}
    </button>
    )
}

const Count = ({sent}) => <p>{sent.name} {sent.count}</p>

const Stats = ({data}) => {
    if (data.length === 0) {
        return (<p>Cannot calculate stats until ratings have been submitted.</p>)
    }
                
    const total = data.length
    const avg = data.reduce((a,b) => a + b)/total
    const percentpos = (data.filter(x => x===1).length)/total*100
    return(
      <div>
        <p>All {total}</p>
        <p>Average {(avg)}</p>
        <p>Positive {(percentpos)}%</p>
      </div>
    )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allSents, setAll] = useState([])
  
  // header names
  const headers = {
      feedback: 'Give Feedback',
      stats: 'Statistics'
  }
  
  //labels
  const sentiments = {
      good:{
        count: good,
        name: 'Good',
        val: 1},
      neutral:{
        count: neutral,
        name: 'Neutral',
        val: 0},
      bad:{
        count: bad,
        name: 'Bad',
        val: -1},
  }
  
  //Add one to the count for a given label, add value of sentiment to 
  const addOne = (label, setLabel, value) => () => {
      setLabel(label + 1)
      setAll(allSents.concat(value))
      console.log(allSents)
  }

  return (
    <div>
      <Header header={headers.feedback} />
      <Button handleClick={addOne(good, setGood, sentiments.good.val)} sent={sentiments.good} />
      <Button handleClick={addOne(neutral, setNeutral, sentiments.neutral.val)} sent={sentiments.neutral} />
      <Button handleClick={addOne(bad, setBad, sentiments.bad.val)} sent={sentiments.bad} />
      <Header header={headers.stats} />
      <Count sent={sentiments.good} />
      <Count sent={sentiments.neutral}/>
      <Count sent={sentiments.bad}/>
      <Stats data={allSents} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)