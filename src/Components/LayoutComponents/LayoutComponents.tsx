import React from 'react'
import LayoutTitleComponent from './LayoutTitleComponent/LayoutTitleComponent'
import LayoutSubHeadingComponent from './LayoutTitleComponent/LayoutSubHeadingComponent'
import Searchbar from './LayoutTitleComponent/LayoutSearchbar/LayoutSearchbarcomponent'

const LayoutComponents = () => {
  return (
    <div>
      <LayoutTitleComponent/>
      <LayoutSubHeadingComponent/>
      <Searchbar/>
    </div>
  )
}

export default LayoutComponents