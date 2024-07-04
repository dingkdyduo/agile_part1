import {useState} from 'react'
import './App.css';

function App() {
const [sumResult,setSumresult] = useState("no result yet")

 const getSum = ()=>{
    let arrNum = document.getElementById('arrayOfNum').value.split(",")
    let targetNum = document.getElementById('target').value
    let result= "false";
    
     for(let i=0;i<arrNum.length-1;i++){
       let sum = Number(arrNum[i]) + Number(arrNum[i+1])
        if( Number(sum) == Number(targetNum)){
          result="true";
          i=arrNum.length
        }
     }
    setSumresult(result)  
 }

  return (
    <div className="mainBody">
      
      <div className="App">
        <h1>Problem #1 Array Sum </h1>
         <div>enter Array of number: <input id='arrayOfNum' /> 'separated by comma'</div>
         <div>enter  target number: <input type='number' id='target' /></div>
         <div>result: {sumResult}</div>
         <button onClick={getSum}> get Sum</button>
      </div>
    </div>
  );
}

export default App;
