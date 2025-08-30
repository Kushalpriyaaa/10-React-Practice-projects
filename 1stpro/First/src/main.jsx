import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
// ye root ara h html se

//to uska kaam kya h react ek virtual dom create karta h apne aap background me ek dom create karega jabhi aapka koi component render hoga to  wo waha htm l me root k andar apne aaphi likha jayaga 

//mtlab ki yha pr hum usko yha pr path bta re h ki bhai tumko yh par hi sari chije render karni h yani generate karni h code

//to react k jitne bhi code h wo root k andar hi render hote h html me jaake 


  <StrictMode>
    <App />
  </StrictMode>,
)
