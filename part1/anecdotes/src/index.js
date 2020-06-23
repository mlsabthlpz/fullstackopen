import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({header}) => <h1>{header}</h1>

const Anecdote = ({selection, selectioncount}) => {
    return (
      <div>
        <p>{selection}</p>
        <p>This has {selectioncount} vote(s).</p>
      </div>
    )
}

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>
    {text}
    </button>
    )
}

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [count, setCount] = useState(new Array(anecdotes.length).fill(0))
  
  const vote = (vote) => () => {
    const addVote = [...count]
    addVote[vote] += 1
    setCount(addVote)
  }

  return (
    <div>
      <Header header="Anecdote of the Day" />
      <Anecdote selection={anecdotes[selected]} selectioncount={count[selected]} />
      <Button onClick={vote(selected)} text="vote"/>
      <Button onClick={() => setSelected(Math.floor(Math.random() * 5))} text="next anecdote"/>
      <Header header="Anecdote with the most votes" />
      <Anecdote selection={anecdotes[count.indexOf(Math.max(...count))]} selectioncount={count[count.indexOf(Math.max(...count))]}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)