import React from 'react'
import LayoutSearchbarcomponent from './ComponentSearchPanel/ComponentSearchPanel'
import LayoutConentComponent from './ComponentTitleSubTitle/ComponentTitleSubTitle'




const LayoutTextComponent = () => {
  return (
    <div className='flex flex-col gap-10 self-center'>
      <LayoutConentComponent/>
      <LayoutSearchbarcomponent/>
      
    </div>
  )
}

export default LayoutTextComponent