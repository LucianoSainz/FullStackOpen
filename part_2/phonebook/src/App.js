import React, { useState } from 'react';


const App = (props) => {
  const [ persons, setPersons ] = useState(props.persons) 
  const [ newName, setNewName ] = useState('')

  const handleChange = (event) => {
    setNewName(event.target.value)
  }

  const handleClick = (event) => {
    console.log('crear nota');
    const addNewName = {
      name: newName,
      id:Math.floor(Math.random() * 101)
    }
    console.log(addNewName);

    setNewName()

 }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input  type='text' onChange={handleChange} />
        </div>
        <div>
          <button type="submit" onClick={handleClick}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
    </div>
  )
}

export default App