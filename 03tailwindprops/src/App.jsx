import { useState } from 'react'

import './App.css'
import Card from './Compontents/Card'

function App() {
  const [count, setCount] = useState(0)
let k=3;
  return (
    <>
      <h1 className='w-full text-red-500 bg-green-400'>Twindl test</h1>
      <Card  p={k}/>
      {/* asse pass kerte hai {} chhaye kuch bhi hai.*/}
      <br></br>
      <Card name="Harsh"/>
    </>
  )
}

export default App 
