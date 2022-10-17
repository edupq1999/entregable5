import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/suggestedList.css'

const SuggestedList = ({suggestedPokemon}) => {

    const [pokemon, setPokemon] = useState()
    const navigate = useNavigate()

    useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154`
    axios.get(URL)
        .then(res => setPokemon(res.data))
        .catch(err => console.log(err))
    }, [suggestedPokemon])

    const click = e => {
        navigate(`/pokedex/${e.target.id}`)
        console.log(e.target.id)
    }

  return (
    <div className='suggestedList'>
        {   
            pokemon?.results.map(poke => (
                poke.name.indexOf(suggestedPokemon?.toLowerCase().trim())
                ?
                ''
                :
                <li 
                key={poke.name}
                id={poke.name}
                onClick={click}
                className='suggested_Pokemon'
                >{poke.name}</li>
            ))
        }
    </div>
  )
}

export default SuggestedList