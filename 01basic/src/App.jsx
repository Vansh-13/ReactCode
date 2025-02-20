import { useState } from "react";
function App() {
  let [counter,setcounter]=useState(0);

  // let counter = 15;
  return (
    <>
      <h1>Hello world</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={()=>{
       setcounter(
        counter= counter+1)
      }}>Add value</button>
      <br></br>
      <button onClick={()=>{
        setcounter(
          counter=counter-1
        )
      }
      }>remove value</button>
    </>
  )
}

export default App
