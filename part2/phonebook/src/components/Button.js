import React from 'react'

const Button = ({id, type, text, onClick}) => {
  return (
    <button id={id} type={type} onClick={onClick}>
    {text}
    </button>
  )
}
    
export default Button