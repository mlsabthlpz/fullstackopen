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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  const names = [part1, part2, part3].map(p => p.name)
  const exercises = [part1, part2, part3].map(p => p.exercises)
  const sum = (a, b) => a + b

  return (
    <div>
      <Header course={course} />
      <Content names={names} 
       exercises={exercises}/>
      <Total exercisetotal={exercises.reduce(sum)}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))