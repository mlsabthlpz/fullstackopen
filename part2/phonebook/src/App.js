import React, { useState } from 'react'
import Header from './components/Header'
import Entry from './components/Entry'
import Button from './components/Button'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')
  
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  
  const addEntry = (event) => {
    event.preventDefault()
    const entryObject = {
        name: newName,
    }
    setPersons(persons.concat(entryObject))
    setNewName('')
  }
     
  return (
    <div>
      <Header header='Phonebook' />
      <form onSubmit={addEntry}>
        <div>
          Name: 
          <input 
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <Button
            type='submit'
            text='Add'
            />
        </div>
      </form>
      <Header header='Numbers' />
      <div>
        {persons.map(
          person => <Entry key={person.name} entry={person} />
          )}
      </div>
    </div>
  )
}

export default App
