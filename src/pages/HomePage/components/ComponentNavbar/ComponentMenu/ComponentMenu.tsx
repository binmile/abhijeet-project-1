import React from 'react'
import NavbarListComponent from './ComponentList'
import NavbarLogoComponent from './ComponentLogo'
import menuData from '../../../../../assests/dummyData/dummyData'

const NavbarMenuComponent = () => {
  return (
    <div className='flex items-center gap-20'>
        <NavbarLogoComponent/>
        <NavbarListComponent strings={menuData}/>
        
    </div>
  )
}

export default NavbarMenuComponent