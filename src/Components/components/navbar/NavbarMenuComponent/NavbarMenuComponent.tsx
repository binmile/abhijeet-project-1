import React from 'react'
import NavbarListComponent from './NavbarListComponent'
import NavbarLogoComponent from './NavbarLogoComponent'
import menuData from '../../../../dummyData/dummyData'

const NavbarMenuComponent = () => {
  return (
    <div className='flex items-center gap-6'>
        <NavbarLogoComponent/>
        <NavbarListComponent strings={menuData}/>
    </div>
  )
}

export default NavbarMenuComponent