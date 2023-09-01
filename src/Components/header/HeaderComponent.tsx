
import React from 'react'
import HeaderComponentButton from './ComponentHeader/ComponentMenu'
import HeaderComponentMenu from './ComponentHeader/ComponentButton'

export function ComponentHeader() {
  return (
    <div className='flex'>
      <HeaderComponentButton/>
      <HeaderComponentMenu/>
    </div>
  )
}

