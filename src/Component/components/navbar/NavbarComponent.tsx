import React from 'react'
import NavbarButtonComponent from './NavbarButtonsComponent/NavbarButtonComponent'
import NavbarMenuComponent from './NavbarMenuComponent/NavbarMenuComponent'

const NavbarComponent = () => {
  return (
    <div className='flex justify-between items-center gap-20'>
        <NavbarMenuComponent/>
        <NavbarButtonComponent/>
    </div>
  )
}

export default NavbarComponent