import React from 'react'
import NavbarButtonComponent from './ComponentButtons/ComponentButtons'
import NavbarMenuComponent from './ComponentMenu/ComponentMenu'
import NavImage from './ComponentMenu/ComponentMenuIcon'


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