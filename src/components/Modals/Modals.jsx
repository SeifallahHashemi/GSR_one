import React from 'react'
import { useNavigate } from 'react-router-dom'

function Modals({ children }) {
  const navigate = useNavigate();
    const hideModalHandler = () => {
        navigate('..');
    }
  return (
    <>
        <div className='absolute inset-0 bg-black opacity-50 z-50' onClick={hideModalHandler}/>
        <div className='fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50'>{children}</div>
    </>
  )
}

export default Modals