import React from 'react'

const Entry = ({ entry }) => {
  return (
    <div>
      {entry.name} {entry.number}
    </div>
  )
}

export default Entry
