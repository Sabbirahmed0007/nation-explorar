// import { useState } from 'react'

import { Suspense } from 'react'
import './App.css'
import Countries from './Components/Countries/Countries'

const countriesPromise = fetch(`https://openapi.programming-hero.com/api/all`).then(res => res.json())

function App() {
  // const [count, setCount] = useState(0)





  return (
    <>
      <Suspense fallback="Wating for the countries...">

      <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
      
        
      
     
    </>
  )
}

export default App
