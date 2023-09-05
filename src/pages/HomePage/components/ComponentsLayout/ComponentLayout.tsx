import React from 'react'
import LayoutTextComponent from './ComponentHeading/ComponentHeading'
import LayoutImageComponent from './ComponentImage/ComponentImage'

const LayoutComponents = () => {
  return (
    <div className='flex justify-center mt-20 flex-wrap gap-[20px]'>
        <LayoutTextComponent/>
        <LayoutImageComponent/>
    </div>
  )
}

export default LayoutComponents