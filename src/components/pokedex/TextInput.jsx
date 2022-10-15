import React from 'react'
import { useNavigate } from 'react-router-dom'

const TextInput = () => {

  const navigate = useNavigate()

  const submit = event => {
    event.preventDefault()
    navigate(`/pokedex/${event.target.search.value.trim().toLowerCase()}`)
  }

  return (
    <form className='search' onSubmit={submit}>
        <input id='search' className='search_input' type="text" placeholder='Enter pokemon name'/>
        <button className='search_button'>Search</button>
    </form>
  )
}

export default TextInput