import React from 'react'
import Logo from '../../CommonComponents/Logo'
import ComponentMenuList from './ComponentMenuList'

function ComponentMenu() {
  return (
    <div className='flex'>
      <Logo/>
      <ComponentMenuList/>
    </div>
  )
}

export default ComponentMenu