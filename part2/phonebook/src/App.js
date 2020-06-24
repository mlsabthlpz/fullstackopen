import React, { useState } from 'react'
import Header from './components/Header'
import Entry from './components/Entry'
import Button from './components/Button'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  const entriesToShow = newFilter === ''
      ? persons
      : persons.filter(person => 
                       person.name.toLowerCase().includes(newFilter))
  
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  
  const handleNumChange = (event) => {
    setNewNumber(event.target.value)
  }
  
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }
  
  const addEntry = (event) => {
    event.preventDefault()
    if (persons.map(person => person.name).includes(newName)) {
        return window.alert(`${newName} is already in this phonebook!`)
    }
    const entryObject = {
      name: newName,
      number: newNumber,
    }
    setPersons(persons.concat(entryObject))
    setNewName('')
    setNewNumber('')
  }
     
  return (
    <div>
      <Header header='Phonebook' />
      <div>
          Filter by name: 
          <input 
            value={newFilter}
            onChange={handleFilterChange}
          />
      </div>
      <Header header='Add New Phonebook Entry' />
      <form onSubmit={addEntry}>
        <div>
          Name: 
          <input 
            value={newName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          Number: 
          <input 
            value={newNumber}
            onChange={handleNumChange}
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
        {entriesToShow.map(
          person => <Entry key={person.name} entry={person} />
          )}
      </div>
    </div>
  )
}

export default App
