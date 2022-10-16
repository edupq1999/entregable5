import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import DeployableList from '../components/pokedex/DeployableList'
import CardPoke from '../components/pokedex/CardPoke'
import TextInput from '../components/pokedex/TextInput'
import BackButton from '../components/pokedex/BackButton'
import NextButton from '../components/pokedex/NextButton'
import './styles/pokedex.css'
import { Navigate } from 'react-router-dom'

const Pokedex = () => {

  const [pokemonData, setPokemonData] = useState()
  const [types, setTypes] = useState()
  const [typeSelected, setTypeSelected] = useState('All')
  const [pages, setpages] = useState(20)
  const [limit, setLimit] = useState()

  const userName = useSelector(state => state.userName)

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/type/`
    axios.get(URL)
      .then(res => setTypes(res.data.results))
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    if (typeSelected==='All'){
      const URL = `https://pokeapi.co/api/v2/pokemon?limit=${pages}&offset=${pages-20}`
      axios.get(URL)
        .then(res => {
          setPokemonData(res.data.results)
          setLimit(1154)
        })
        .catch(err => console.log(err))
    }else{
      const URL = `https://pokeapi.co/api/v2/type/${typeSelected}`
      axios.get(URL)
        .then(res => {
          setPokemonData(res.data.pokemon)
          setLimit(res.data.pokemon.length)
        })
        .catch(err => console.log(err))
    }
  }, [typeSelected, pages])

  return (
    userName 
    ?
    <div>
      <header className='pokedex'>
        <p>Welcome <span>{userName}</span>. here you can find your favorite pokemon.</p>
      </header>
      <TextInput />
      <DeployableList 
        types = {types}
        setTypeSelected = {setTypeSelected}
        setpages = {setpages}
      />
      <section className='pokemon_list'>
        {
          typeSelected === 'All'
          ?
          pokemonData?.map(pokemon => (
            <CardPoke 
              key = {pokemon.url}
              url = {pokemon.url}
            />
          ))
          :
          pokemonData?.slice(pages-20,pages).map(pokemon => (
            <CardPoke
              key = {pokemon.pokemon?.url}
              url = {pokemon.pokemon?.url}
            />
          ))
        }
      </section>
      <BackButton 
        setpages = {setpages}
        pages = {pages}
      />
      <NextButton 
        setpages = {setpages}
        pages = {pages}
        limit = {limit}
      />
    </div>
    :
    <Navigate to={'/'}/>
  )
}

export default Pokedex