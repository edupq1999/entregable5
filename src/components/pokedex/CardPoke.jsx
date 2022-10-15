import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PokemonList = ({url, typeSelected}) => {

  const [pokemon, setPokemon] = useState()
  
  useEffect(() => {
    if (url){
      axios.get(url)
        .then(res => setPokemon(res.data))
        .catch(err => console.log(err))
    }
  }, [typeSelected])
  
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/pokedex/${pokemon.id}`)
  }

  return (
    <article onClick={handleClick}>
        <header>
          <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </header>
        <section>
          <h3>{pokemon?.name}</h3>
          {
            pokemon?.types.map(type => (
              <p key={type.slot}>{type.type.name}</p>
            ))
          }
          <ul>
            {
              pokemon?.stats.map(stat => (
                <p key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</p>
              ))
            }
          </ul>
        </section>
    </article>
  )
}

export default PokemonList