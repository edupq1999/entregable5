import React from 'react'
import './styles/pages.css'

const Pages = ({setpages, array}) => {
    
    const handlePage = event => {
        setpages(20*event.target.id)
    }
  return (
    <div className='pages'>
        {
            array?.map(number => (
                <span 
                    key={number}
                    onClick={handlePage} 
                    className='page'
                    id={number-1}
                >
                    {number}
                </span>
            ))
        }
    </div>
  )
}

export default Pages