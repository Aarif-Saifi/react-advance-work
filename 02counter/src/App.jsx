import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)



  const addValue = () => {
    // console.log("Add Value", Math.random())
    if(count < 6){
      setCount(count + 1)
    }
  }

  const removeValue = () => {
    if(count > 0){
      setCount(count - 1)
    }
  }

  return (
    <>
     <h1>Chai and code</h1>
     <p>Count value: {count}</p>

     <button onClick={addValue} disabled={count === 6}>Add</button>
     <button onClick={removeValue} disabled={count === 0}>Remove</button>
    </>
  )
}

export default App
