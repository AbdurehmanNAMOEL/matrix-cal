            
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

let newArray2=[[2,3,4,5,1],[1,5,6,7,0],[9,7,0,1,8],[3,2,0,1,9],[3,2,0,1,6]]
let arra1=[]
let arra2=[]
let arra3=[]
let arra4=[]

console.log(row,column)

const converting4x4MatrixTo3x3=()=>{
  
for(let i=0;i<newArray2.length;i++){
 for(let j=0;j<newArray2.length;j++){
     
  if(i=== 0 && j=== 0){
    let alpha = newArray2[i][j]
     arra1.push(
      [(alpha*newArray2[i+1][j+1]),(alpha*newArray2[i+1][j+2]),(alpha*newArray2[i+1][j+3])],
      [(alpha*newArray2[i+2][j+1]),(alpha*newArray2[i+2][j+2]),(alpha*newArray2[i+2][j+3])],
      [(alpha*newArray2[i+3][j+1]),(alpha*newArray2[i+3][j+2]),(alpha*newArray2[i+3][j+3])]
      )
   
  }

   if(i=== 0 && j === 1){
    let alpha=newArray2[i][j]
     arra2.push(
      [(alpha*newArray2[i+1][j-1]),(alpha*newArray2[i+1][j+1]),(alpha*newArray2[i+1][j+2])],
      [(alpha*newArray2[i+2][j-1]),(alpha*newArray2[i+2][j+1]),(alpha*newArray2[i+2][j+2])],
      [(alpha*newArray2[i+3][j-1]),(alpha*newArray2[i+3][j+1]),(alpha*newArray2[i+3][j+2])]
      )
  }

  if(i=== 0 && j === 2){
     let alpha = newArray2[i][j]
     arra3.push(
     [(alpha*newArray2[i+1][j-2]),(alpha*newArray2[i+1][j-1]),(alpha*newArray2[i+1][j+1])],
     [(alpha*newArray2[i+2][j-2]),(alpha*newArray2[i+2][j-1]),(alpha*newArray2[i+2][j+1])],
     [(alpha*newArray2[i+3][j-2]),(alpha*newArray2[i+3][j-1]),(alpha*newArray2[i+3][j+1])]
      )
    
  }

  if(i=== 0 && j === 3){
     let alpha = newArray2[i][j]
     arra4.push(
      [(alpha*newArray2[i+1][j-3]),(alpha*newArray2[i+1][j-2]),(alpha*newArray2[i+1][j-1])],
      [(alpha*newArray2[i+2][j-3]),(alpha*newArray2[i+2][j-2]),(alpha*newArray2[i+2][j-1])],
      [(alpha*newArray2[i+3][j-3]),(alpha*newArray2[i+3][j-2]),(alpha*newArray2[i+3][j-1])]
      )
     
  }
}  

}


console.log(arra1,'1');
console.log(arra2,'2');
console.log(arra3,'3');
console.log(arra4,'4');
dummyArray=arra1
}

// converting4x4MatrixTo3x3()
// console.log('new dummyArray Value is: ',dummyArray)


let matrix=[]
let matrix2=[]
let combianArray=[]
let combianArray2=[]

 const genericMatrixCreator=(inputMatrix)=>{
       console.log((inputMatrix.length));
    const square=(inputMatrix.length-1)
     for(let i=0;i<inputMatrix.length-1;i++){
      for(let j=0;j<inputMatrix.length-1;j++){
       
          if(i=== 0 && j===0 ){
            for(let t=1;t<inputMatrix.length;t++){
                for(let k=1;k<inputMatrix.length;k++){
                   matrix.push(inputMatrix[t][k])
                }
            }
          }if(i === 0 && j!==0){
            console.log('hi');
            for(let t=1;t<inputMatrix.length;t++){
                for(let k=0;k<inputMatrix.length;k++){
                   matrix2.push(inputMatrix[t][k])
                }
            }
          }
             
        }
        
         combianArray.push([matrix.splice(0,square)])
         console.log('new matrix',combianArray);
         combianArray2.push([matrix2.splice(0,square+1)])
         console.log('new matrix',combianArray2);
     }
     

 }


 genericMatrixCreator(newArray2)
//creating 2x2 matrix from 3x3 matrix

let newArray =[[2,0,1],[3,5,3],[4,7,8]]                 
let array1=[]
let array2=[]
let array3=[]

const converting3x3MatrixTo2x2=()=>{

for(let i=0;i<newArray.length;i++){
 for(let j=0;j<newArray.length;j++){
     
  if(i=== 0 && j=== 0){
     array1.push(
      ([(newArray[i][j]*newArray[i+1][j+1]),(newArray[i][j]*newArray[i+1][j+2])]),
      [(newArray[i][j]*newArray[i+2][j+1]),(newArray[i][j]*newArray[i+2][j+2])]
      )
  }

   if(i=== 0 && j === 1){
   
     array2.push(
      ([(newArray[i][j]*newArray[i+1][j]),(newArray[i][j]*newArray[i+1][j+1])]),
      [(newArray[i][j]*newArray[i+2][j]),(newArray[i][j]*newArray[i+2][j+1])]
      )
  }

  if(i=== 0 && j === 2){
     
     array3.push(
      ([(newArray[i][j]*newArray[i+1][j-2]),(newArray[i][j]*newArray[i+1][j-1])]),
      [(newArray[i][j]*newArray[i+2][j-2]),(newArray[i][j]*newArray[i+2][j-1])]
      )
  }
}  

}

console.log(array1);
console.log(array2);
console.log(array3);

}

converting3x3MatrixTo2x2(combianArray)



// determinant
  let array =[[2,4],[6,7]]
let arrayValue=0
 
const handle2x2Determinant=(arrayInput)=>{
   
for(let i=0;i<arrayInput.length-1;i++){
 for(let j=0;j<arrayInput.length-1;j++){
       
  arrayValue=(arrayInput[i][j]*arrayInput[i+1][j+1])-(arrayInput[i][j+1]*arrayInput[i+1][j])
}  

}
console.log(arrayValue);
}

// handle2x2Determinant(array1)
// handle2x2Determinant(array2)
// handle2x2Determinant(array3)

const inverseOfMatrix=(inputMatrix)=>{
  for(let i= 0;i<inputMatrix.length;i++){
    for(let j= 0;j<inputMatrix.length;j++){
      inputMatrix[i][j]=inputMatrix[j][i]
    } 
  }

  console.log(inputMatrix);
}

// inverseOfMatrix(arra1)


//  const isPalinDrome=(inputText)=>{
//   let reverseWord=''
//   let textArray= inputText.split('')
//   for(let i=textArray.length-1;i>=0;i--) reverseWord+=textArray[i]
//   if(inputText===reverseWord){
//   console.log(`${inputText} is Palindrome`);
//  }else console.log(`${inputText} isn't Palindrome`);
// }
// isPalinDrome('mom')

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
// getProductOfMatrix(arra1,arra2)
const handleMatrixInput=()=>{
   let newArray = inputValue.map(item=>item.input)
   console.log(newArray[0]);
  if(row === column){

    for(let i=0;i<row;i++){
      for(let j=0;j<column;j++){
      
        dummyArray[i][j]= newArray[i]
    }  
  
    }
  }else console.log('it is not square matrix');
  
}
handleMatrixInput()
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
