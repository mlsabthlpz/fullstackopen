import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Entries from './components/Entries'

function App() {
  const [ countries, setCountries ] = useState([])
  const [ newFilter, setNewFilter ] = useState('')
  const [ selected, setSelected ] = useState('')
  const entriesToShow = newFilter === ''
      ? countries
      : countries.filter(country => 
                       country.name.toLowerCase().includes(newFilter))

  const hook = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }

  useEffect(hook, [])

  const handleFilterChange = (event) => {
    setSelected('')
    setNewFilter(event.target.value)
  }
  
  const handleShowButton = (event) => {
    const clickedCountry = countries.find(
      country => country.name === event.target.name)
    setSelected([clickedCountry])
    }
  
  return (
    <div>
      <Filter 
        text='Find countries' 
        value={newFilter} 
        onChange={handleFilterChange} 
      />
      <Entries entries={selected ? selected : entriesToShow} 
               onClick={handleShowButton}  />
    </div>
  );
}

export default App;
