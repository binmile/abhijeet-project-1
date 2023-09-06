import React from 'react'
import LayoutTitleComponent from './ComponentTextContent/ComponentTitle'
import LayoutSubHeadingComponent from './ComponentTextContent/ComponentSubtitle'

const LayoutConentComponent = () => {
  return (
    <div className='gap-6'>
        <LayoutTitleComponent/>
        <LayoutSubHeadingComponent/>
    </div>
  )
}

export default LayoutConentComponent