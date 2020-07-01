import React from 'react'
import Entry from './Entry'

const Entries = ({ entries, deleteClick }) => {
  return (
    <div>
      {entries.map(
        person => 
          <Entry key={person.name} entry={person} onClick={deleteClick}/>
      )}
    </div>
  )
}

export default Entries
