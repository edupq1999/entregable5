import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUserNameGlobal } from '../../store/slices/userName.slice'

const FormHome = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const submit = event =>{
        event.preventDefault()
        dispatch(setUserNameGlobal(event.target.firstChild.value.trim()))
        navigate('/pokedex')
    }


  return (
    <form className='home_form' onSubmit={submit}>
      <input
        className='home_input' 
        type="text" 
        placeholder='Enter your name.'/>
      <button className='home_button'>Catch them all!</button>
    </form>
  )
}

export default FormHome