import React, { useState } from 'react'
import Nav from './components/Nav'
import { Routes, Link, Route } from 'react-router-dom'
import Create from './components/Create'
import List from './components/List'
import Edit from './components/Edit'
import Home from './components/Home'




const App = () => {
  const [notes, setnotes] = useState(JSON.parse(localStorage.getItem('notes')) || [])
  return (
    <>
    <div className='flex flex-col relative justify-start gap-5 h-[100vh]'>
      
    <Nav />

    <Routes>
      {/* <Route path="/"/>  */}
      <Route path="/" element={<Home notes={notes} setnotes={setnotes}/>}/> 
      <Route path="/create" element={<Create notes={notes} setnotes={setnotes}/>}/> 
      <Route path="/list" element={<List notes={notes} setnotes={setnotes}/>}/> 
      <Route path="/list/edit/:id" element={<Edit notes={notes} setthoughts={setnotes}/>}/> 

    </Routes>
    </div>
    </>
  )
}

export default App