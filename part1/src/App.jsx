const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const name = "Mario"
  const age = 30
  return (
    <div>
      <h1>Greetings</h1>

      <Hello name='George' age={26 + 10} />
      <Hello name='Daisy'  age={25 + 15}/>
    </div>
  )
}

export default App
