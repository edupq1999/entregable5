import React from 'react'
import FormHome from '../components/home/FormHome'

const Home = () => {
  return (
    <div>
      <h1 className='home_tittle'>Pokedex</h1>
      <h2 className='home_greeting'>Hi trainer!</h2>
      <p className='home_text'>Give me your name to start</p>
      <FormHome />
    </div>
  )
}

export default Home