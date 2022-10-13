            
import { useEffect, useState } from 'react';
import './App.css';
import MatrixDisplay from './components/MatrixDisplay';
import Draggable from 'react-draggable'; 
let dummyArray=[]
function App() {

const [row,setRaw]=useState(0)
const [column,setColumn]=useState(0)
const [inputValue,setValue]= useState([])

const handleTestEvent=(e)=>{
     console.log(e.target.offsetTop);
}

const createDummyMatrix=()=>{
 dummyArray = Array(row).fill(new Array(column).fill(0))
  console.log(dummyArray);
}

// converting 4x4 matrix to 3x3

let newArray2=
[
 [2,3,4,5,8,1],
 [1,5,6,7,0,1],
 [9,7,0,1,5,1],
 [3,2,0,1,4,12],
 [3,2,0,1,2,11],
 [3,2,0,1,2,20]
]

let matrix=[]
let subMatrix=[]
let combianArray2=[]
 
// calculating the determinant

 const genericMatrixCreator=(inputMatrix)=>{
     return (inputMatrix[0][0]*inputMatrix[1][1])-(inputMatrix[0][1]*inputMatrix[1][0])
}

// getting the subMatrix from the big matrix

 const getSubMatrix=(inputMatrix)=>{
  if(inputMatrix.length===2){
    genericMatrixCreator(inputMatrix)
  }else if(inputMatrix.length>2){
    subMatrix2(inputMatrix)
  } 
  if(subMatrix.length>2){
    inputMatrix=subMatrix
    subMatrix=[]
    getSubMatrix(inputMatrix)
  }
   
}

const subMatrix2=(matrixInput)=>{
   for(let i=1;i<matrixInput.length;i++){
        for(let j=1;j<matrixInput.length;j++){
           matrix.push(matrixInput[i][j])
        }
  subMatrix.push(matrix.splice(0,matrixInput.length))
  }
   console.log('submatrix',subMatrix,'length',subMatrix.length);
   if(subMatrix.length===2){
    console.log(`The Determinant is |A|= ${genericMatrixCreator(subMatrix)}`);
   }
   matrix=[]
}

getSubMatrix(newArray2)

const arrayNew=[]

const newArrayList =(inputMatrix)=>{        
  for(let i=0;i<inputMatrix.length;i++){
    if(i%2!==0){
      for(let j=0;j<inputMatrix.length-1;j++){
        arrayNew.push(inputMatrix[i][j])
      }
    }
  }
  console.log('hi',arrayNew);
}

 newArrayList(combianArray2)

// determinant

const transposeOfMatrix=(inputMatrix)=>{
  for(let i= 0;i<inputMatrix.length;i++){
    for(let j= 0;j<inputMatrix.length;j++){
      inputMatrix[i][j]=inputMatrix[j][i]
    } 
  }

  console.log(inputMatrix);
}

const getProductOfMatrix=(m1,m2)=>{
     
     if(m1.length!==m2.length){
           console.log('you need square matrix');
     }else{
     for(let i=0;i<m1.length;i++){
      for(let j=0;j<m1.length;j++){
            dummyArray[i][j]=m1[i][j]*m2[i][j]
     }
     }
    }
    console.log('product',dummyArray);
}

createDummyMatrix(row,column)

useEffect(()=>{

},[row,column])

  return (
    <div className="App">
     <MatrixDisplay 
     inputValue={inputValue} 
     setValue={setValue}
     setColumn={setColumn}
     setRaw={setRaw}
     row={row}
     column={column}
     />
      {/* for testing purpose */}
      <Draggable>
      <div onMouseEnter={handleTestEvent} className="elastic-div"></div>
      </Draggable>
    </div>

  
  );
}

export default App;
