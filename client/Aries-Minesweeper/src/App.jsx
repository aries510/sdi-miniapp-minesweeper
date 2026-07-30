import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Board />}/>
        <Route path='/gameover' element={<GameOver />}/>
        <Route path='/win' element={<WinScreen />}/>
      </Routes>
    </>
  )
}

export default App
