import React from 'react'

import { menuData } from '../../../../DummyData/DummyData'

interface NavbarListComponentProps {
  menuData: string[];
}

const NavbarListComponent: React.FC<NavbarListComponentProps> = (props) => {
 
  
  return (
    <div>
     {props.menuData.map((props, index) =>
    
    <a key={index} href={'#'}>
      {props}
    </a>)}
    
     
        
    </div>
  )
}

export default NavbarListComponent