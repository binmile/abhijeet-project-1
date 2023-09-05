import React from 'react'
import LayoutTitleComponent from './ComponentTitle'
import LayoutSubHeadingComponent from './ComponentSubtitle'

const LayoutConentComponent = () => {
  return (
    <div className='gap-6'>
        <LayoutTitleComponent/>
        <LayoutSubHeadingComponent/>
    </div>
  )
}

export default LayoutConentComponent