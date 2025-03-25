
import { Suspense, useEffect, useState } from 'react'
import './App.css'
import Countries from './countries'
import Header from './header'

function App() {
  const [countries,setCountries] = useState([])
useEffect(()=>{
     fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => setCountries(data))
   
},[])

  return (
    <>
        <Header></Header>
        <Suspense fallback="🌀 Loading...">
        <Countries countries={countries}></Countries>
        </Suspense>
    </>
  )
}

export default App
