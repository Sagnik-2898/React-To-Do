import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-red-900 text-white py-2'>
        <div className="logo">
          <span className='font-bold text-xl mx-8'>React To-Do : Create Your Own To-Do  </span>
            
            
        </div>
      <ul className="flex gap-8 mx-9">
        
        <a href='https://github.com/Sagnik-2898' className='cursor-pointer hover:font-bold transition-all'>
          Github
        </a>
        <a href='https://www.linkedin.com/in/sagnik-banerjee-738929219/' className='cursor-pointer hover:font-bold transition-all'>Linkedin</a>
      </ul>
    </nav>
  )
}

export default Navbar
