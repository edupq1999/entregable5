import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import PokemonId from './pages/PokemonId'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App() {

  const userName = useSelector(state => state.userName)

  const [color, setColor] = useState('light-mode')

  const toggle = () => {
    color === 'light-mode'
    ?
    setColor('dark-mode')
    :
    setColor('light-mode')
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
      {
        userName
        ?
        <a className='back_page button' href="javascript:history.back()">
          <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24"><path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path></svg>
        </a>
        :
        ''
      }
      <div className='button toggle' onClick={toggle}>
        <span>
          {
          color === 'light-mode'
          ?
          '🌑'
          :
          '🌞'
          }
        </span>
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
