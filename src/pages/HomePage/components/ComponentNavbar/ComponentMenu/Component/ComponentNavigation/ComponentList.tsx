import React from 'react'
import "/home/abhijeet/Desktop/my-ts-tailwind-app/src/utils/fontStyles/textStyles.css"

interface NavbarListComponentProps {
  strings: string[];
}


const NavbarListComponent:React.FC<NavbarListComponentProps> = ({strings}) => {
  const menuList= strings.map((strings,index)=>
  <li key={index}>{strings} </li>
  )
  
  
  return (
    <div className='hidden xl:flex'>
      <ul className='flex linkFont gap-10 whitespace-nowrap ' >
        {menuList}
      </ul>
    </div>
  )
}

export default NavbarListComponent