import React from 'react'
import NavbarButtonComponent from './NavbarButtonsComponent/NavbarButtonComponent'
import NavbarMenuComponent from './NavbarMenuComponent/NavbarMenuComponent'
import NavImage from '../NavImage'


const NavbarComponent = () => {
  return (
    <div className='flex justify-between items-center  flex-wrap'>
        <NavbarMenuComponent/>
        <NavbarButtonComponent/>
        <NavImage/>
    </div>
  )
}

export default NavbarComponent