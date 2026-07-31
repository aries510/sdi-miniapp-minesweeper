import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Board from './components/Board';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from "./GlobalStyle";
import { gundamTheme } from './theme';


function App() {
    const [gameId, setGameId] = useState(0)

  return (
    <ThemeProvider theme={gundamTheme}>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Board key={ gameId } restart={() => setGameId(gameId + 1)}/>}/>
        {/* <Route path='/win' element={<WinScreen />}/> */}
      </Routes>
    </ThemeProvider>
  )
}

export default App
