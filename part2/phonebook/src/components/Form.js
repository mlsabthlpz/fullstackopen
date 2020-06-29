import React from 'react'
import Button from './Button'
import Input from './Input'

const Form = ({onSubmit,
               nameText, nameVal, nameChange,
               numText, numVal, numChange}) => {
  return (
    <form onSubmit={onSubmit}>
      <Input 
        text={nameText} 
        value={nameVal} 
        onChange={nameChange} 
      />
      <Input 
        text={numText} 
        value={numVal} 
        onChange={numChange} 
      />
        <Button
          type='submit'
          text='Add'
        />
      </form>
  )
}

export default Form