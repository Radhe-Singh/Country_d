import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Body from './components/Body'
import { Routes,Route } from 'react-router-dom'
import SearCard from './components/SearCard'
import Card from './components/card'
function App() {

  return (
    <>

     
     <Routes>
      <Route path='/' element={<Body/>}/>
      <Route path="/SearCard/:index" element={<SearCard/>}/>
      <Route path="*" element="<h1> no page found</h1>"/>
     </Routes>
    
    </>
  )
}

export default App
