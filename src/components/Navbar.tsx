import React from 'react'
import { NavLink } from 'react-router-dom'



const Navbar = () => {

  const navLinkStyles = ({ isActive }) => {
    return {
      textDecoration: isActive? 'bold' : 'normal',
      color: isActive? 'none' : 'underline'
    }
  }
  return (
    // <nav className='p-3 flex gap-4 '></nav>
    <nav className={`${navLinkStyles} p-3 flex gap-4`}>
        <NavLink className={'text-lg'} to={'/'}>Home</NavLink>
        <NavLink to={'about'}>About</NavLink>

    </nav>
  )
}

export default Navbar