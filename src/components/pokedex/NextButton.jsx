import React from 'react'
import './styles/nextButton.css'
import '../../App.css'

const NextButton = ({setpages, pages, limit}) => {
    const handlePage = () => {
        if (pages<limit){
            setpages(pages+20)
        }
    }
  return (
    <div className='button next' onClick={handlePage}>
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm4 14h-2v-4l-6 4V8l6 4V8h2v8z"></path></svg>
    </div>
  )
}

export default NextButton