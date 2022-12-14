import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import DeployableList from '../components/pokedex/DeployableList'
import CardPoke from '../components/pokedex/CardPoke'
import TextInput from '../components/pokedex/TextInput'
import SuggestedList from '../components/pokedex/SuggestedList.jsx'
import BackButton from '../components/pokedex/BackButton'
import NextButton from '../components/pokedex/NextButton'
import './styles/pokedex.css'
import { Navigate } from 'react-router-dom'
import Pages from '../components/pokedex/Pages'

const Pokedex = () => {

  const [pokemonData, setPokemonData] = useState()
  const [types, setTypes] = useState()
  const [typeSelected, setTypeSelected] = useState('All')
  const [pages, setpages] = useState(0)
  const [limit, setLimit] = useState()
  const [suggestedPokemon, setSuggestedPokemon] = useState()
  const [countPages, setcountPages] = useState(0)
  const [array, setArray] = useState([])

  const userName = useSelector(state => state.userName)

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/type/`
    axios.get(URL)
      .then(res => setTypes(res.data.results))
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    if (typeSelected==='All'){
      const URL = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${pages}`
      axios.get(URL)
        .then(res => {
          setPokemonData(res.data.results)
          setLimit(res.data.count)
          setcountPages(res.data.count/20)
        })
        .catch(err => console.log(err))
    }else{
      const URL = `https://pokeapi.co/api/v2/type/${typeSelected}`
      axios.get(URL)
        .then(res => {
          setPokemonData(res.data.pokemon)
          setLimit(res.data.pokemon.length)
          setcountPages(res.data.pokemon.length/20)
        })
        .catch(err => console.log(err))
    }
  }, [typeSelected, pages])

  useEffect(() => {
      let array = []
      for (let i = 1; i<=Math.ceil(countPages); i++){
          array.push(i)
      }
      setArray(array)
  }, [countPages])

  return (
    userName 
    ?
    <div>
      <header className='pokedex'>
        <p>Welcome <span>{userName}</span>. here you can find your favorite pokemon.</p>
      </header>
      <nav className='navbar'>
        <div className='input_bar'>
          <TextInput setSuggestedPokemon = {setSuggestedPokemon}/>
          <SuggestedList suggestedPokemon = {suggestedPokemon}/>
        </div>
        <DeployableList 
          types = {types}
          setTypeSelected = {setTypeSelected}
          setpages = {setpages}
        />
      </nav>
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
          pokemonData?.slice(pages,pages+20).map(pokemon => (
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
      <Pages 
        setpages = {setpages}
        array = {array}
        setArray = {setArray}
      />
    </div>
    :
    <Navigate to={'/'}/>
  )
}

export default Pokedex