import { useState } from 'react';
import './App.css';

function App() {

  let [counter,setCounter]=useState(0);


  const addValue=()=>{
    setCounter(counter+1);
  }

  const removeValue=()=>{
    //setCounter(counter-1);
    
    if(counter>0)
      {
        setCounter(counter-1);
      }
    else{
      setCounter(0);
    }
  }

  return (
    <div>
      <h2>This is a counter app</h2>
      <p>counter Value:{counter} &nbsp;
      <button onClick={addValue}>inc.</button>
      
      <button onClick={removeValue}>dec.</button>
      </p>
    </div>


  );
}

export default App;
