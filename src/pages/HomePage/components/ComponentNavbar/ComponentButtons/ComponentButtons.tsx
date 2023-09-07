import React from 'react'
import ResumeButtonComponent from './ComponentAuthenticationButtons/ComponentResumeButton'
import SignInButtonComponent from './ComponentAuthenticationButtons/ComponentSignInButton'

const NavbarButtonComponent = () => {


  return (
    <div className='xl:flex xl:gap-10 xl:align-middle hidden '>
      <ResumeButtonComponent/>
      <SignInButtonComponent/>
    </div>
  )
}

export default NavbarButtonComponent