import React from 'react'
import InputField from './InputField'
import './styles/matrix.css'

import Draggable from 'react-draggable'; 

const MatrixDisplay = ({inputValue,setValue}) => {
 

  return (
    <Draggable>
<div className="big-container">
 <div className="matrix-size-input">
    <input type="number" name="row" id="row" placeholder='row'/>
    <input type="number" name="col" id="col" placeholder='column'/>
</div>   
<div className="hr"/>
<div className='matrix-display-container'>
  {
  inputValue.map((index)=>(
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