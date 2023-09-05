import React from 'react'
import Button from '../../../../../components/Button'
import ResumeButtonComponent from './ComponentResumeButton'
import SignInButtonComponent from './ComponentSignInButton'

const NavbarButtonComponent = () => {


  return (
    <div className='xl:flex xl:gap-10 xl:align-middle hidden '>
      <ResumeButtonComponent/>
      <SignInButtonComponent/>
    </div>
  )
}

export default NavbarButtonComponent