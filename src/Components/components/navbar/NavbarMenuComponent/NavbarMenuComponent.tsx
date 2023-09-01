import React from 'react'
import NavbarListComponent from './NavbarListComponent'
import NavbarLogoComponent from './NavbarLogoComponent'
import { menuData } from '../../../../DummyData/DummyData'

const NavbarMenuComponent = () => {
  return (
    <div className='flex '>
        <NavbarLogoComponent/>
        <NavbarListComponent menuData={[]} />
    </div>
  )
}

export default NavbarMenuComponent