import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/textInput.css'

const TextInput = () => {

  const navigate = useNavigate()

  const submit = event => {
    event.preventDefault()
    navigate(`/pokedex/${event.target.search.value.trim().toLowerCase()}`)
  }

  return (
    <form className='search' onSubmit={submit}>
        <input id='search' className='search_input' type="text" placeholder='Enter pokemon name'/>
        <div className='search_buttons'>
          <button className='search_button'></button>
          <button className='search_button'></button>
          <button className='search_button'></button>
          <button className='search_button'></button>
          <button className='search_button'></button>
        </div>
    </form>
  )
}

export default TextInput