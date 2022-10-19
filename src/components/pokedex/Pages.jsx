import React, { useEffect } from 'react'
import './styles/pages.css'

let array = []
const Pages = ({countPages, setpages, typeSelected}) => {
    useEffect(() => {
        array = []
        for (let i = 1; i<=Math.ceil(countPages); i++){
            array.push(i)
        }
        console.log(array)
    }, [countPages, typeSelected])
    
    const handlePage = event => {
        setpages(20*event.target.id)
    }
  return (
    <div className='pages'>
        {
            array?.map(number => (
                <span 
                    onClick={handlePage} 
                    className='page'
                    id={number-1}
                    key={number}
                >
                    {number}
                </span>
            ))
        }
    </div>
  )
}

export default Pages