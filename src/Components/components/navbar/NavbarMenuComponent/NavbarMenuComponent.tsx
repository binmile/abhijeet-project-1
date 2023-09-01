import React from 'react'
import NavbarListComponent from './NavbarListComponent'
import NavbarLogoComponent from './NavbarLogoComponent'
import menuData from '../../../../dummyData/dummyData'

const NavbarMenuComponent = () => {
  return (
    <div className='flex '>
        <NavbarLogoComponent/>
        <NavbarListComponent strings={menuData}/>
    </div>
  )
}

export default NavbarMenuComponent