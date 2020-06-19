import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
  	  <p>{props.part} {props.exercise}</p>
  	)
  }
  
const Content = (props) => {
  
  return (
    <div>
      <Part part={props.names[0]} exercise={props.exercises[0]}/>
      <Part part={props.names[1]} exercise={props.exercises[1]}/>
      <Part part={props.names[2]} exercise={props.exercises[2]}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.exercisetotal}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content names={[part1, part2, part3]} exercises={[exercises1, exercises2, exercises3]}/>
      <Total exercisetotal={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))