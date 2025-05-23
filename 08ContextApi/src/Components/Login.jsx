import React, { useState ,useContext } from 'react'
import UserContext from '../context/UserContext'

function Login () {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit  = (e)=>{
          e.preventDefault()// kyuki submit krne pe url ke through kahi or chla jata h 

          setUser({username, password})
    }
  return (
    <div >
        <h2>Login</h2>
        <input type="text"
        value={username}
        onChange= {(e)=>setUsername(e.target.value)} 
        placeholder='username'
        />

        {"  "}
          <input type="text"
        value={password}
        onChange= {(e)=>setPassword(e.target.value)} 
        placeholder='password'

        />
         { "   "}
        <button onClick={handleSubmit}>Submit</button>o
    </div>
  )
}

export default Login