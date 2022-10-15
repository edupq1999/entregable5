import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import PokemonId from './pages/PokemonId'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App() {

  const [color, setColor] = useState('light')

  const toggle = () => {
    color === 'light'
    ?
    setColor('dark')
    :
    setColor('light')
  }

  return (
    <div className='App' id={color}>
      <div className='App_tittle'>
        <img src="https://i.pinimg.com/originals/bd/cd/20/bdcd20f5411ee5785889542d303ad4cb.png" alt="pokedex_img" />
      </div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route element={<ProtectedRoutes/>} />
          <Route path='/pokedex' element={<Pokedex/>} />
          <Route path='/pokedex/:id' element={<PokemonId/>} />
        <Route/>
      </Routes>
      <div className='handleColor' onClick={toggle}>
        {
          color === 'light'
          ?
          '🌑'
          :
          '🌞'
        }
      </div>
      <footer className='general_footer'>
        <div className='general_footer_middle'>
          <div className='general_footer_middle_circle'></div>
          <div className='general_footer_middle_circle'></div>
        </div>
      </footer>
    </div>
  )
}

export default App
