import React from 'react'
import { IoHome } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Link to={"/"} className='fixed top-2 left-2 border border-zinc-700 rounded-[50%] p-2 hover:text-teal-600 transition-all duration-300 hover:border-teal-600'>
        <IoHome className='w-8 h-8'/>
    </Link>
  )
}

export default Home