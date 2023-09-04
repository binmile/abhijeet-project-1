import React from 'react'
import LayoutTextComponent from './LayouttextComponent'
import LayoutImageComponent from './LayoutImageComponent'

const LayoutComponents = () => {
  return (
    <div className='flex justify-center mt-20 flex-wrap gap-[20px]'>
        <LayoutTextComponent/>
        <LayoutImageComponent/>
    </div>
  )
}

export default LayoutComponents