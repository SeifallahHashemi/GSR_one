import React, { useContext } from 'react'
import { MdOutlinePostAdd, MdInsertComment } from "react-icons/md"
import { Outlet } from 'react-router-dom';
import { ModalContext } from '../store/modal-context'

const MainHeader = () => {
    const ctx = useContext(ModalContext);
    const showModalHandler = () => {
        ctx.onShowModal();
    }
  return (
    <>
        <div className='flex flex-row justify-between w-full align-middle border-b-2 border-b-cyan-900 py-4'>
            <div className='flex flex-row gap-1 items-center text-lg'>
                <h2>پست ها</h2>
                <MdInsertComment />
            </div>
            <div>
                <button className='flex flex-row gap-1 align-middle border-2 border-cyan-900 hover:bg-cyan-900 hover:text-slate-300 hover:border-transparent transition-all duration-500 bg-transparent' onClick={showModalHandler}>اضافه کردن پست<MdOutlinePostAdd /></button>
            </div>
        </div>
        <Outlet />
    </>
  )
}

export default MainHeader