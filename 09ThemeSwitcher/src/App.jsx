import { useEffect, useState } from 'react'
import { ThemeProvider } from './Contexts/theme'
import Card from './components/Card'
import Btn from './components/btn'

function App() {
  const [Mode, setTheme] = useState("light")

  const lightTheme =()=>{
    setTheme ("light")
  }
  const darkTheme =()=>{
    setTheme ("dark")
  }


  useEffect(()=>{
     document.querySelector('html').classList.remove("light", "dark")
     document.querySelector('html').classList.add(Mode)
  },[Mode])


  return (
   <ThemeProvider value={{Mode, lightTheme, darkTheme}}>
    <div className='flex flex-wrap min-h-screen items-center '>
      <div className='w-full'>
         <div className='w-full max-w-sm mx-auto flex justify-end mb-4'>
          <Btn/>
         </div>

         <div className='w-full max-w-sm mx-auto '>
          <Card/>
         </div>
      </div>
    </div>
   </ThemeProvider>
  )
}

export default App
