import React from 'react'
import { Link } from 'react-router-dom'
const navbar = () => {
  return (
    <nav className='bg-gray-800 py-4 px-20 flex justify-between items-center'>
      <h1 className='text-white text-2xl'>My Portfolio</h1>
      <div className='flex space-x-4 gap-10'>
        {/* <Link to="/aboutMe" className='text-gray-300 hover:text-white'>About Me</Link>
        <Link to="/projects" className='text-gray-300 hover:text-white'>Projects</Link>
        <Link to="/contact" className='text-gray-300 hover:text-white'>Contact</Link> */}
      </div>
    </nav>
  )
}

export default navbar;