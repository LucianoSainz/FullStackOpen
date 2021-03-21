import React, {useState} from 'react';
import ReactDOM from 'react-dom';


const Statistics = (props) => {
  if(props.sum === 0 && props.title === true) {
    return(
       <tr>
         <td>No comments provided</td>
       </tr> 
    )
  }

  if(props.sum === 0){
    return(
      <tr>
        <td></td>
      </tr>
    )
  }
  
  return(
    <tr>
      <td>{props.name} {props.val}</td>
    </tr>
  )
}


const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
    </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <div>
      <h2>give feedback</h2>
      <Button handleClick={handleGoodClick} text='Good' />
      <Button handleClick={handleNeutralClick} text='Neutral' />
      <Button handleClick={handleBadClick} text='Bad' />
  

    <h2>Statistics</h2>
    <table>
      <tbody>
    <Statistics title={true} sum={good + bad + neutral} />
    <Statistics name="Good" sum={good + bad + neutral} val={good} />
    <Statistics name="Neutral" sum={good + bad + neutral} val={neutral} />
    <Statistics name="Bad" sum={good + bad + neutral} val={bad} />

    <Statistics name='Average' sum={good + bad + neutral} val={(good + bad)/(good + bad + neutral)} />
    <Statistics name='positive' sum={good + bad + neutral} val={(good)/(good + bad + neutral)*100} />
    
      </tbody>
    </table>  
      </div>
    </div>

  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
