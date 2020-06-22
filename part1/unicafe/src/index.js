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

const Statistic = ({name, value}) => {
    return (
        <p>{name} {value}</p>
    )
}

const Statistics = ({data}) => {
    const alldata = data.all.val
    const totalcount = data.all.count
    if (totalcount === 0) {
        return (<p>Cannot calculate stats until feedback has been given. :(</p>)
    }
              
    const avg = alldata.reduce((a,b) => a + b)/totalcount
    const percentpos = ((data.good.count)/totalcount*100)
    return(
      <div>
        <Statistic name={data.good.name} value={data.good.count} />
        <Statistic name={data.neutral.name} value={data.neutral.count} />
        <Statistic name={data.bad.name} value={data.bad.count} />
        <Statistic name="All" value={totalcount} />
        <Statistic name="Average" value={avg} />
        <Statistic name="Positive" value={percentpos+"%"} />
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
      all:{
        count: allSents.length,
        name: 'All',
        val: allSents
      }
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
      <Statistics data={sentiments} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)