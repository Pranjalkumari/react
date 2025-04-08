import { useState } from 'react'

import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-blue-400'> hii</h1>
   <AddTodo/>
   <Todos/>
     </>
  )
}

export default App
