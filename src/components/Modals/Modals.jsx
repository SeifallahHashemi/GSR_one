import React, { useContext } from 'react'
import { ModalContext } from '../../store/modal-context'

function Modals({ children }) {
    const ctx = useContext(ModalContext);
    const hideModalHandler = () => {
        ctx.onHideModal()
    }
  return (
    <>
        <div className='absolute inset-0 bg-black opacity-50' onClick={hideModalHandler}/>
        <div className='fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50'>{children}</div>
    </>
  )
}

export default Modals