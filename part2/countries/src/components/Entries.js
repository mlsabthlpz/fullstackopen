import React from 'react'
import Entry from './Entry'
import CountryDetails from './CountryDetails'

const Entries = ({ entries }) => {
  const numMatches = entries.length
  switch(true) {
    case (numMatches > 10):
      return (<div>Too many matches. Please specify another filter.</div>)
    case (numMatches === 1):
      const country = entries[0]
      return (<CountryDetails key={country.name} entry={country} />)
    default:
      return (
        <div>
          {entries.map(
            country => <Entry key={country.name} entry={country} />)}
        </div>
      )  
  }
}

export default Entries
