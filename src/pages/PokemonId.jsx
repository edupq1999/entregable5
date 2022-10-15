import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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
    <div>
      <header>
        <h1>{pokemon?.name}</h1>
        <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        <p>
        <h3>Types: </h3>
        {
          pokemon?.types.map(type => (
            <span key={type.type.name}> {type.type.name}</span>
          ))
        }
        </p>
        <p>
          <h3>Pokemon abilities</h3>
        {
          pokemon?.abilities.map(ability => (
            <span key={ability.ability.name}> {ability.ability.name}</span>
          ))
        }
        </p>
      </header>
      <section>
        <h2>characterist</h2>
        <p>Height: <span>{pokemon?.height}</span></p>
        <p>Weight: <span>{pokemon?.weight}</span></p>
      </section>
      <section>
        <h2>Stats</h2>
        {
          pokemon?.stats.map(stat => (
            <span key={stat.stat.name}> {stat.stat.name}: {stat.base_stat}</span>
          ))
        }
      </section>
    </div>
  )
}

export default PokemonId