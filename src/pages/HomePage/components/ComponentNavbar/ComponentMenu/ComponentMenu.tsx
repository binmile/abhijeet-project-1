import React from 'react'
import NavbarListComponent from './Component/ComponentNavigation/ComponentList'
import NavbarLogoComponent from './Component/ComponentNavigation/ComponentLogo'
import {menuData} from '../../../../../utils/dummyData/dummyData'

const NavbarMenuComponent = () => {
  return (
    <div className='flex items-center gap-20'>
        <NavbarLogoComponent/>
        <NavbarListComponent strings={menuData}/>
        
    </div>
  )
}

export default NavbarMenuComponent