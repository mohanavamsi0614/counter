import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function dere() {
    if (count>0){
    setCount(count-1)
  }
    
  }
  return (
    <div className='ji'>
      <h1>{count}</h1>
      <button onClick={()=>{setCount(count+1)}}>+</button>
      <button className='reset' onClick={()=>{setCount(0)}}>Reset</button>
      <button onClick={dere}>-</button>
    </div>
  )
}

export default App;
