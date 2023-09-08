import React from 'react'
import { NavLink } from 'react-router-dom'



const Navbar = () => {
 
  return (
    // <nav className='p-3 flex gap-4 '></nav>
    <nav className={`p-3 flex gap-4`} >
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'about'}>About</NavLink>

    </nav>
  )
}

export default Navbar