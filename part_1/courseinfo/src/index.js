import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return(
     <>
     <h1>{props.course}</h1>
     </>
  )
}

const  Part = (props) => {
  return(
     <>
     <p>{props.course.name} {props.course.exercises}</p>
     </>
  )
}

const Contet = (props) => {
  return(
    <>
     <Part content = {props.content[0]} />
     <Part content = {props.content[1]} />
     <Part content = {props.content[2]} />
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
     <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))