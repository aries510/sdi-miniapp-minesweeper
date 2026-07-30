import { useState } from 'react'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element='<Board />'/>
        <Route path='/gameover' element='<GameOver />'/>
        <Route path='/win' element='<WinScreen />'/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
