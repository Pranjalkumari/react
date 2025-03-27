import { useState } from 'react'

import './App.css'

//--------------------hooks--------------------
// How React Controls the UI
// React follows a declarative approach to updating the UI. Instead of directly manipulating the DOM (like in vanilla JavaScript), React updates the UI by re-rendering the component whenever the state changes.

// ✅ How React Controls UI:

// Virtual DOM: React keeps a virtual copy of the real DOM and updates only the parts that change.

// Component-Based Structure: Each part of the UI is built as a reusable component.

// State & Props: The UI changes dynamically when state changes.

// Reactivity: When a component’s state updates, React automatically re-renders the UI.


function App() {
  const [counter, setCounter] = useState(0);

 
    const addValue =()=>{
          if(counter<20 )
          {
            setCounter ( prevCounter => prevCounter+1);//Using counter directly might lead to stale state issues.

            //Always use the functional form (prevCounter => prevCounter + 1) when state depends on the previous value.
          }
    }
    const removeValue =()=> {
      if(counter>0)
      {
        setCounter(prevCounter => prevCounter-1); //function call
      }
    }

  return (
    <>
   <h1>click the button to increase counter </h1>
   <button onClick={addValue}>counter:{counter}</button>
   <button onClick={removeValue}>decrease:{counter}</button>
    </>
  )
}

export default App
