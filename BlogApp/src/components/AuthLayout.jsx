import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'



export default function Protected({children , authentication = true}){
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state=> state.auth.status)

    useEffect (()=>
    {
      if(authentication && authStatus!== authentication){
        navigate("/login")//User is not authenticated but trying to access a protected page → redirect to /login


      }else if(!authentication && authStatus !== authentication) {
        navigate("/")//This is for pages that should only be shown to logged-out users, like login or signup pages.
      }
      setLoader(false)
    },[authStatus, navigate, authentication])

    return loader? <h1>Loading...</h1>: <>{children}</>
}


//While checking the auth status → show "Loading..." message

//Once done → show the actual page (children)