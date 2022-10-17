import React from 'react'
import './styles/notFound.css'

const NotFound = () => {
  return (
    <div className='notFound'>
        <h1 className='notFound_tittle'>P<img className='notFound_img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/769px-Pokebola-pokeball-png-0.png" alt="" />kemon Not found 😥</h1>
        <h3 className='notFound_message'>Error 404</h3>
        <p className='notFound_p'>Let's go find another!</p>
        <a className='notFound_button' href="javascript:history.back()"><span>Go!</span></a>
    </div>
  )
}

export default NotFound