import React from 'react'

const BackButton = ({setpages, pages}) => {
    const handlePage = () => {
        if (pages>20){
            setpages(pages-20)
        }
    }
  return (
    <div onClick={handlePage}>&674</div>
  )
}

export default BackButton