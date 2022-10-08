import React from 'react'
import InputField from './InputField'
import './styles/matrix.css'

import Draggable from 'react-draggable'; 

const MatrixDisplay = ({inputValue,setValue,setColumn,setRaw,row,column,}) => {
 
  const handleColumnInput =(e)=>{
    setColumn(parseInt(e.target.value))
    setValue([...inputValue,{inputVa:''}])
    
  }

  const handleRowInput =(e)=>{
    setRaw(parseInt(e.target.value))
    setValue([...inputValue,{inputVa:''}])
    
  }

 

 

  return (
<Draggable>
<div className="big-container">
 <div className="matrix-size-input">
    <input 
    onChange={handleRowInput} 
    type="number" 
    value={row} 
    placeholder='row'
    />
    <input 
    onChange={handleColumnInput} 
    type="number"
    value={column} 
    placeholder='column'
    />
</div>   
<div className="hr"/>
<div className='matrix-display-container'>
  {
  inputValue.map((item,index)=>(
    <InputField
    inputValue={inputValue}
    index={index}
    setValue={setValue}
    />
))}

    </div>
    </div>
    </Draggable>
  )
}

export default MatrixDisplay