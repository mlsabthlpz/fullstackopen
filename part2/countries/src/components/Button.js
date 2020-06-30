import React from 'react'

const Button = ({type, name, text, onClick}) => {
  return (
      <button type={type} 
              name={name}
              onClick={onClick}>
      {text}
      </button>
    )
}
    
export default Button