import React from 'react'
import "/home/abhijeet/Desktop/my-ts-tailwind-app/src/fontStyles/textStyles.css"

interface NavbarListComponentProps {
  strings: string[];
}


const NavbarListComponent:React.FC<NavbarListComponentProps> = (props) => {
  const menuList= props.strings.map((strings,index)=>
  <li key={index}>{strings} </li>
  )
  
  
  return (
    <div>
      <ul className='flex linkFont gap-6' >
        {menuList}
      </ul>
    </div>
  )
}

export default NavbarListComponent