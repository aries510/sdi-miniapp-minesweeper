import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Board from './components/Board';

function App() {
    const [gameId, setGameId] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Board key={ gameId } restart={() => setGameId(gameId + 1)}/>}/>
        {/* <Route path='/win' element={<WinScreen />}/> */}
      </Routes>
    </>
  )
}

export default App
