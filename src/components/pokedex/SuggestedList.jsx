import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SuggestedList = ({suggestedPokemon}) => {

    const [pokemon, setPokemon] = useState()

    if (suggestedPokemon !== ''){
        useEffect(() => {
        const URL = `https://pokeapi.co/api/v2/pokemon?name=${suggestedPokemon}`
            
        axios.get(URL)
            .then(res => setPokemon(res.data))
            .catch(err => console.log(err))
        }, [suggestedPokemon])
    }
    
    console.log(pokemon)

  return (
    <div className='suggestedList'>
        {
            
        }
    </div>
  )
}

export default SuggestedList