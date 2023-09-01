import React from 'react'
import NavbarButtonComponent from './NavbarButtonsComponent/NavbarButtonComponent'
import NavbarMenuComponent from './NavbarMenuComponent/NavbarMenuComponent'

const NavbarComponent = () => {
  return (
    <div className='flex'>
        <NavbarMenuComponent/>
        <NavbarButtonComponent/>
    </div>
  )
}

export default NavbarComponent