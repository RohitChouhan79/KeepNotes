import React, { useState } from 'react'
import Nav from './components/Nav'
import { Routes, Link, Route } from 'react-router-dom'
import Create from './components/Create'
import List from './components/List'
import Edit from './components/Edit'
import Home from './components/Home'




const App = () => {
  const [thoughts, setthoughts] = useState(JSON.parse(localStorage.getItem('thoughts')) || [])
  return (
    <>
    <div className='flex flex-col relative justify-start gap-5 h-[100vh]'>
      
    <Nav />

    <Routes>
      {/* <Route path="/"/>  */}
      <Route path="/" element={<Home thoughts={thoughts} setthoughts={setthoughts}/>}/> 
      <Route path="/create" element={<Create thoughts={thoughts} setthoughts={setthoughts}/>}/> 
      <Route path="/list" element={<List thoughts={thoughts} setthoughts={setthoughts}/>}/> 
      <Route path="/list/edit/:id" element={<Edit thoughts={thoughts} setthoughts={setthoughts}/>}/> 

    </Routes>
    </div>
    </>
  )
}

export default App