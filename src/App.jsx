            
import { useEffect, useState } from 'react';
import './App.css';
import MatrixDisplay from './components/MatrixDisplay';
import Draggable from 'react-draggable'; 
let dummyArray=[]
function App() {

const [row,setRaw]=useState(0)
const [column,setColumn]=useState(0)
const [inputValue,setValue]= useState([])

const handleTestEvent=(e)=> console.log(e.target.offsetTop);


const createDummyMatrix=()=>{
 dummyArray = Array(row).fill(new Array(column).fill(0))
  console.log(dummyArray);
}

// converting 4x4 matrix to 3x3

let newArray2=
[

 [1,5,6,7,0,1],
 [9,7,3,1,5,1],
 [3,2,5,1,4,12],
 [3,2,6,1,2,11],
 [3,2,8,1,2,20]
]

let matrix=[]
let subMatrix=[]
let combianArray2=[]
let dete=[]
 
// calculating the determinant

 const determinantOf2x2Matrix=(inputMatrix)=>{
     return (inputMatrix[0][0]*inputMatrix[1][1])-(inputMatrix[0][1]*inputMatrix[1][0])
}

let count=0
// getting the subMatrix from the big matrix


let determinant=0
const finalDeterimenant=()=>{
  for(let i=0;i<dete.length;i++){
    determinant+=Math.pow(-1,i)*dete[i]
  }
  console.log(determinant)
}
const subMatrix2=(matrixInput)=>{
   for(let i=1;i<matrixInput.length;i++){
      for(let j=0;j<matrixInput.length;j++){
        if(i!==0){
          if(j!==count){
             matrix.push(Math.pow(-1,count)*matrixInput[0][0]*matrixInput[i][j])
          }
          console.log(count);
        } else break  
               
      }     
  subMatrix.push(matrix.splice(0,matrixInput.length))
}

 if(subMatrix.length>2){
   console.log(subMatrix,subMatrix.length);
  matrixInput=subMatrix
  subMatrix=[]
  subMatrix2(matrixInput)
}else if(subMatrix.length===2){
  console.log(subMatrix);
  console.log(`The determinant of |A| is : ${determinantOf2x2Matrix(subMatrix)}`);
  dete.push(determinantOf2x2Matrix(subMatrix))
  
   subMatrix=[]
   if(count!==newArray2.length){
    count++
    subMatrix2(newArray2)
   }else  finalDeterimenant()
 
}

 
    
  
   console.log('sub-matrix',subMatrix,'length',subMatrix.length);
  //  if(subMatrix.length===2){
  //   console.log(`The Determinant is |A|= ${genericMatrixCreator(subMatrix)}`);
  //  }else if(subMatrix.length>2){
  //   matrixInput=subMatrix
  //   subMatrix=[]
  //   subMatrix2(matrixInput)
  // }
 
}

subMatrix2(newArray2)


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
