import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Pokedex from './pages/Pokedex'
import PokemonId from './pages/PokemonId'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route element={<ProtectedRoutes/>} />
          <Route path='/pokedex' element={<Pokedex/>} />
          <Route path='/pokedex/:id' element={<PokemonId/>} />
        <Route/>
      </Routes>
    </div>
  )
}

export default App
