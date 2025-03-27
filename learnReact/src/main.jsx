import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

const anotherEle = (
    <a href="https://google.com" target='_blank'>visit google</a>
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  
      // we can aplso write like app()  { as it is a function }
      <app/>
    //  anotherEle 

);

