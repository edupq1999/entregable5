import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './styles/pokemonId.css'

const PokemonId = () => {

  const {id} = useParams()

  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`
    axios.get(URL)
      .then(res => setPokemon(res.data))
      .catch(err => console.log(err))
    
  }, [])
  console.log(pokemon)

  return (
    <div className='pokemonId'>
      <div className='pokemonId_Card'>
          <img className='pokemonId_img' id={pokemon?.types[0].type.name} src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
          <div className='pokemonId_info'>
            <h1 className='pokemonId_name'>{pokemon?.name}</h1>
            <div className='types'>
              <h3 className='types_title'>Types: </h3>
              {
                pokemon?.types.map(type => (
                  <span key={type.type.name} id={type.type.name}></span>
                ))
              }
            </div>
            <div className='abilities'>
              <h3 className='abilities_title'>Pokemon abilities: </h3>
            {
              pokemon?.abilities.map(ability => (
                <span key={ability.ability.name}> {ability.ability.name}</span>
              ))
            }
            </div>
            <section className='characterist'>
              <h3 className='characterist_title'>Characterist:</h3>
              <p>Height: <span>{pokemon?.height}0 </span>cm</p>
              <p>Weight: <span>{pokemon?.weight}00 </span>g</p>
            </section>
            <div className='stats'>
              <h3 className='stats_title'>Stats:</h3>
              {
                pokemon?.stats.map(stat => (
                  <span key={stat.stat.name}> {stat.stat.name}: {stat.base_stat}</span>
                ))
              }
            </div>
          </div>
      </div>
    </div>
  )
}

export default PokemonId