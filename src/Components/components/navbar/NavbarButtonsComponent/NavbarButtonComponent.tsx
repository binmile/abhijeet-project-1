import React from 'react'
import Button from '../../../CommonComponents/Button'

const NavbarButtonComponent = () => {
  return (
    <div className='flex linkFont gap-6'>
        <Button text={'Create a resume'}/>
        <Button text={'Sign in'}/>
        
    </div>
  )
}

export default NavbarButtonComponent