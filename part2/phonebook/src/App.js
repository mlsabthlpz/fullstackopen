import React, { useState } from 'react'
import Filter from './components/Filter'
import Entries from './components/Entries'
import Form from './components/Form'

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
      number: newNumber
    }
    setPersons(persons.concat(entryObject))
    setNewName('')
    setNewNumber('')
  }
     
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        filterText='Filter by' 
        filterVal={newFilter} 
        filterChange={handleFilterChange}
      />
      <h3>Add New Phonebook Entry</h3>
      <Form
        onSubmit={addEntry}
        nameText='Name'  
        nameVal={newName}
        nameChange={handleNameChange}
        numText='Number' 
        numVal={newNumber}
        numChange={handleNumChange}
      />
      <h3>Numbers</h3>
      <Entries entries={entriesToShow} />
    </div>
  )
}

export default App
