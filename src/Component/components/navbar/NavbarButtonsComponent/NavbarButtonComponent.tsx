import React from 'react'
import Button from '../../../CommonComponents/Button'

const NavbarButtonComponent = () => {
  return (
    <div className='sm:flex linkFont gap-20 whitespace-nowrap hidden'>
        <Button text={'Create a resume'}/>
        <Button text={'Sign in'}/>
        
    </div>
  )
}

export default NavbarButtonComponent