import React ,{useState} from 'react'
import Login from "./Components/Login"
import Profile from './Components/Profile'
import UserContextProvider from "./context/UserContextProvider"


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <UserContextProvider>
      <Login/>
        <Profile/>
    </UserContextProvider>
     
  )
}

export default App
