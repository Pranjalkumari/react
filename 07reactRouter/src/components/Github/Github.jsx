import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
//  when component reload

// const [data,setData] = useState([])
//     useEffect (()=>{
//         fetch('https://api.github.com/users/Pranjalkumari')
//         .then(response => response.json())
//         .then(data=> {
//             console.log(data);
//             setData(data)
            
//         })
//     },[])


// optimize way to fetch (in above method when cursor goes on Github ,at that mment fetch the api )

const data = useLoaderData()
  return (
    <div className='bg-gray-400 text-3xl text-center text-white'>
      Github Followers:{data.id}</div>
  )
}

export default Github


export const infoLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/Pranjalkumari')
    return response.json()
}