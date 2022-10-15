import axios from 'axios'
import React, { useEffect } from 'react'

const DeployableList = ({types, setTypeSelected, setpages}) => {

  useEffect(() => {
    const URL = ''
    axios.get(URL)
      .then(res => res.data)
      .catch(err => console.log(err))
  }, [])
  
  const handleSelect = event => {
    if (event.target.value!='all'){
      setTypeSelected(event.target.value)
    }else{
      setTypeSelected('All')
    }
    setpages(20)
  }
  return (
    <select name="type" id="type" onChange={handleSelect}>
        <option value='all'>All types</option>
        {
          types?.map(type => (
            <option 
              key={type.name}
              id={type.name}
              value={type.name}
            >
              {type.name}
            </option>
          ))
        }
    </select>
  )
}

export default DeployableList