import React from 'react'
import './styles/deployableList.css'

const DeployableList = ({types, setTypeSelected, setpages}) => {
  
  const handleSelect = event => {
    if (event.target.value!='all'){
      setTypeSelected(event.target.value)
    }else{
      setTypeSelected('All')
    }
    setpages(20)
  }
  return (
    <select className='deployable' name="type" id="type" onChange={handleSelect}>
        <option className='deployable_option' value='all'>All types</option>
        {
          types?.map(type => (
            <option 
              className='deployable_option'
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