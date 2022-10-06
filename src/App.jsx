            
import { useState } from 'react';
import './App.css';
import MatrixDisplay from './components/MatrixDisplay';
import Draggable from 'react-draggable'; 

function App() {

  const [initialPosition,setInitialPosition]= useState({x:0,y:0})
  const [finialPosition,setFinalPosition]= useState({x:0,y:0})
  const [inputValue,setValue]= useState([
    {inputVa:''},{inputVa:''},{inputVa:''},{inputVa:''}])
                                                                                                                                      
const handleMatrixSize=()=>{
     setValue([...inputValue,{inputVa:''}])   
}

const handleTestEvent=(e)=>{
     
  console.log(e.target.offsetTop);

}


  return (
    <div className="App">
     <MatrixDisplay 
     inputValue={inputValue} 
     setValue={setValue}
     />

      <button onClick={handleMatrixSize}>+</button>

      {/* for testing purpose */}
      <Draggable>
      <div onMouseEnter={handleTestEvent} className="elastic-div"></div>
      </Draggable>
    </div>

   
  );
}

export default App;
