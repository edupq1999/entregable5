import React from 'react'

const NextButton = ({setpages, pages, limit}) => {
    const handlePage = () => {
        if (pages<limit){
            setpages(pages+20)
        }
    }
  return (
    <div onClick={handlePage}>sfhfswh</div>
  )
}

export default NextButton