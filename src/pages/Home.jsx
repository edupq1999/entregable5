import React from 'react'
import FormHome from '../components/home/FormHome'
import './styles/home.css'

const Home = () => {
  return (
    <div className='home'>
      <img src="https://images.wikidexcdn.net/mwuploads/esssbwiki/thumb/c/c0/latest/20210725170725/Entrenador_Pok%C3%A9mon_RojoFuego_y_VerdeHoja.png/1200px-Entrenador_Pok%C3%A9mon_RojoFuego_y_VerdeHoja.png" alt="trainer_img" />
      <h2 className='home_greeting'>Hi trainer!</h2>
      <p className='home_text'>Give me your name to start</p>
      <FormHome />
    </div>
  )
}

export default Home