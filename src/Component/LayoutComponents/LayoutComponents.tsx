import React from 'react'
import LayoutTextComponent from './LayouttextComponent'
import LayoutImageComponent from './LayoutImageComponent'

const LayoutComponents = () => {
  return (
    <div className='flex justify-evenly mt-20 gap-10 flex-wrap'>
        <LayoutTextComponent/>
        <LayoutImageComponent/>
    </div>
  )
}

export default LayoutComponents