import React from 'react'
import Button from './Button'

const Entry = ({ entry, onClick }) => {
  return (
    <div>
      {entry.name} {entry.number} 
      <Button id={entry.id} type='button' text='delete' onClick={onClick} />
    </div>
  )
}

export default Entry