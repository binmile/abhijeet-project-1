import React from 'react'
import LayoutSearchbarcomponent from './LayoutSearchBarcomponent/LayoutSearchbar/LayoutSearchbarcomponent'
import LayoutConentComponent from './LayoutTitleComponent/LayoutConentComponent'




const LayoutTextComponent = () => {
  return (
    <div className='flex flex-col gap-10 self-center'>
      <LayoutConentComponent/>
      <LayoutSearchbarcomponent/>
      
    </div>
  )
}

export default LayoutTextComponent