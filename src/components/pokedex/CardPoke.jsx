import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/cardPoke.css'

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
    <article className='card' onClick={handleClick}>
        <header className='card_tittle' id={pokemon?.types[0].type.name}>
          <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
          <h3 className='card_tittle_name'>{pokemon?.name}</h3>
        </header>
        <section className='card_more_info'>
          <ul className='card_types'>
            <span>Types: </span>
          {
            pokemon?.types.map(type => (
              <li key={type.slot} className='card_type' id={type.type.name}></li>
            ))
          }
          </ul>
          <ul className='card_stats'>
            {
              pokemon?.stats.map(stat => (
                <li key={stat.stat.name} className='card_stat'><span className='card_stat_name'>{stat.stat.name}: </span>{stat.base_stat}</li>
              ))
            }
          </ul>
        </section>
    </article>
  )
}

export default PokemonList