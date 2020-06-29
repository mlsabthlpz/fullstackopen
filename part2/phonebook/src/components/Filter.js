import React from 'react'
import Input from './Input'

const Filter = ( { filterText, filterVal, filterChange } ) => {
    return ( 
      <Input 
        text={filterText} 
        value={filterVal} 
        onChange={filterChange} />
           )
}

export default Filter