import React from 'react'

interface NavbarListComponentProps {
  strings: string[];
}


const NavbarListComponent:React.FC<NavbarListComponentProps> = (props) => {
  const menuList= props.strings.map((strings,index)=>
  <li key={index}>{strings} </li>
  )
  
  
  return (
    <div>
      <ul className='flex'>
        {menuList}
      </ul>
    </div>
  )
}

export default NavbarListComponent