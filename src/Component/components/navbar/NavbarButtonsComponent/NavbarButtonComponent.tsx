import React from 'react'
import Button from '../../../CommonComponents/Button'
import ResumeButtonComponent from './ResumeButtonComponent'
import SignInButtonComponent from './SignInButtonComponent'

const NavbarButtonComponent = () => {


  return (
    <div className='xl:flex xl:gap-10 xl:align-middle hidden '>
      <ResumeButtonComponent/>
      <SignInButtonComponent/>
    </div>
  )
}

export default NavbarButtonComponent