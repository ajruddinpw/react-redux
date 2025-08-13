 import React from 'react'
 import './App.css'
 function App() {

  function handleIncrementClick() {
    // Dispatch increment action
  }

  function handleDecrementClick() {
    // Dispatch decrement action
  }

   return (
     <div className='container'>
        <button onClick={handleIncrementClick}>+</button>
        <p>Count:</p>
        <button onClick={handleDecrementClick}>-</button>
     </div>
   )
 }
 
 export default App
 