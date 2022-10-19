import React from 'react'
import './styles/backButton.css'

const BackButton = ({setpages, pages}) => {
    const handlePage = () => {
        if (pages>0){
            setpages(pages-20)
        }
    }
  return (
    <div className='button back' onClick={handlePage}>
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10c5.515 0 10-4.486 10-10S17.515 2 12 2zm4 14-6-4v4H8V8h2v4l6-4v8z"></path></svg>
    </div>
  )
}

export default BackButton