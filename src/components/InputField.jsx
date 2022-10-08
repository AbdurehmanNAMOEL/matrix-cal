import React from 'react'
import './styles/inputField.css'
const InputField = ({setValue,inputValue,index}) => {

const handleInput=(index,e)=>{
       const values = [...inputValue]
       values[index][e.target.name]=e.target.value 
       setValue(values)
      
}

    
  return (
    <input 
    onChange={(e)=>handleInput(index,e)}
    type={'text'}
    name={'input'}
    value={inputValue.input}
    autoFocus
    />
  )
}

export default InputField