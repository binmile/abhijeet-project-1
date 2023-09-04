import React from 'react'
import LayoutTitleComponent from './LayoutTitleComponent'
import LayoutSubHeadingComponent from './LayoutSubHeadingComponent'

const LayoutConentComponent = () => {
  return (
    <div className='gap-6'>
        <LayoutTitleComponent/>
        <LayoutSubHeadingComponent/>
    </div>
  )
}

export default LayoutConentComponent