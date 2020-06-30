import React from 'react'
import Button from './Button'

const Entry = ({ entry, onClick }) => {
  return (
    <div>
      {entry.name} <Button type='button' 
                           name={entry.name}
                           onClick={onClick} 
                           text='show' />
    </div>
  )
}

export default Entry