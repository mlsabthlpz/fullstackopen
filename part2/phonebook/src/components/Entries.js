import React from 'react'
import Entry from './Entry'

const Entries = ({ entries }) => {
  return (
    <div>
      {entries.map(
        person => <Entry key={person.name} entry={person} />)}
    </div>
  )
}

export default Entries
