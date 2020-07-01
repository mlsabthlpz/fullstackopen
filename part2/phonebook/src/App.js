import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Entries from './components/Entries'
import Form from './components/Form'
import Notification from './components/Notification'
import personService from './services/persons'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  const [ notification, setNotification ] = useState(null)
  
  /* Get initial phonebook entries from JSON server */
  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
    }, [])

  /* Add entry to JSON upon form submission and update browser view */
  const addEntry = (event) => {
    event.preventDefault()
    const nameExists = persons.map(person => person.name).includes(newName)
    if (nameExists) {
        if (window.confirm(`${newName} is already in this phonebook! Replace number with a new one?`)) {
          const existingPerson = persons.filter(person => person.name === newName)[0]
          const updateNumber = {...existingPerson, number: newNumber}
          personService
            .update(existingPerson.id, updateNumber)
            .then(response => {
              setPersons(persons.map(person => 
                          person.id !== existingPerson.id 
                          ? person 
                          : response ))
              setNewName('')
              setNewNumber('')
              setNotification(`Updated number for ${existingPerson.name}`)
              setTimeout(() => {setNotification(null)}, 5000)
            })
        }
    }
    else {
      const entryObject = {
        name: newName,
        number: newNumber
      }
    
      personService
        .create(entryObject)
        .then(newEntry => {
          setPersons(persons.concat(newEntry))
          setNewName('')
          setNewNumber('')
          setNotification(`Added ${newEntry.name} to phonebook`)
          setTimeout(() => {setNotification(null)}, 5000)
        })
      }
  }

  /* Delete note upon button press */
  const deleteButton = (event) => {
    const id = event.target.id
    const deletePerson = persons.filter(person => person.id === Number(id))[0]
    if (window.confirm(`Delete ${deletePerson.name}?`)) {
      personService.deleteEntry(id)
      setPersons(persons.filter(person => person.id !== Number(id)))
      setNotification(`Removed ${deletePerson.name} from phonebook`)
      setTimeout(() => {setNotification(null)}, 5000)
    }
  }

  /* Filter definition for filter input */
  const entriesToShow = newFilter === ''
  ? persons
  : persons.filter(person => 
                   person.name.toLowerCase().includes(newFilter))

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
      <Notification message={notification} />
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
      <Entries entries={entriesToShow} deleteClick={deleteButton} />
    </div>
  )
}

export default App
