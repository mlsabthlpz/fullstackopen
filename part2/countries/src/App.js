import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Entries from './components/Entries'

function App() {
  const [ countries, setCountries ] = useState([])
  const [ newFilter, setNewFilter ] = useState('')
  const entriesToShow = newFilter === ''
      ? countries
      : countries.filter(country => 
                       country.name.toLowerCase().includes(newFilter))


  const hook = () => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }

  useEffect(hook, [])

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }
  
  return (
    <div>
      <Filter 
        text='Find countries' 
        value={newFilter} 
        onChange={handleFilterChange} 
      />
      <Entries entries={entriesToShow} />
    </div>
  );
}

export default App;
