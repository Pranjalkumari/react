import { useRef, useCallback, useEffect, useState } from 'react'



function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] =useState(false)
  const [specialcharAllowed, setSpecialcharAllowed] = useState(false)
  const [password, setPassword]= useState("")




  const passGene = useCallback(()=>{
      let pass =""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if(numberAllowed)str+= "0123456789"
      if(specialcharAllowed)str+= "!@#$%^&*(){}+-"
      for(let i=0; i<=length; i++)
      {
        let char = Math.floor(Math.random()*str.length +1)
        pass+= str.charAt(char)
      }

      setPassword(pass)
  },[length, numberAllowed, specialcharAllowed, setPassword])// reload whenever these cariable changes




  const passwordRef =useRef(null)




  const copyPasswordToClipboard = useCallback(()=>{
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0,6);
      window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>
  {
    passGene()

  },[length,numberAllowed,specialcharAllowed, passGene])// for optimization




  return (
    <>
       <div className='bg-gray-800  w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-amber-50'>
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
             type="text" 
              value={password}
              className='outline-none w-full py-1 px-3 bg-gray-700  '
              placeholder='"password'
              readOnly
              ref={passwordRef}
              />
              
              <button
              onClick={copyPasswordToClipboard}
                className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0   transition-all duration-200 active:scale-90'>copy</button>
        </div>

        <div>
          
            <div className='flex items-center gap-x-1'> 
               <input type="range" 
               min={6}
               max={100}
               value={length}
               className='cursor-pointer'
               onChange={(e)=>{ setLength(e.target.value)}}
                />
                <label htmlFor="">length: {length}</label>
            </div>

            <div className='flex items-center gap-x-1'> 
               <input type="checkbox" 
                defaultChecked={numberAllowed}
                id='numinp'
               onChange={()=>{
                  setNumberAllowed((prev)=>!prev)
               }}
                />
                <label htmlFor="numinp">Numbers</label>
            </div>

            <div className='flex items-center gap-x-1'> 
               <input type="checkbox" 
                defaultChecked={specialcharAllowed}
                id='charinp'
             onChange={()=>{
              setSpecialcharAllowed((prev) =>!prev)
             }}
                />
                <label htmlFor="charinp">characters</label>
            </div>
             
        </div>
       </div>
    </>
  )
}

export default App
