import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Entries from './components/Entries'
import Form from './components/Form'
import noteService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  const entriesToShow = newFilter === ''
      ? persons
      : persons.filter(person => 
                       person.name.toLowerCase().includes(newFilter))
  
  /* Get inital phonebook entries from JSON server */
  useEffect(() => {
    noteService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
    }, [])

  /* Add entry to JSON upon form submission and update browser view */
  const addEntry = (event) => {
    event.preventDefault()
    if (persons.map(person => person.name).includes(newName)) {
        return window.alert(`${newName} is already in this phonebook!`)
    }
    const entryObject = {
      name: newName,
      number: newNumber
    }
  
    noteService
      .create(entryObject)
      .then(newEntry => {
        setPersons(persons.concat(newEntry))
        setNewName('')
        setNewNumber('')
      })
  }

  /* Update state of phonebook entry and filter inputs */
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  
  const handleNumChange = (event) => {
    setNewNumber(event.target.value)
  }
  
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
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
