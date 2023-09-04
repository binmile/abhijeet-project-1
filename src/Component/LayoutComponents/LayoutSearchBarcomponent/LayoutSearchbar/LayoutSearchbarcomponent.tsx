import React from 'react'
import Button from '../../../CommonComponents/Button'
import '/home/abhijeet/Desktop/my-ts-tailwind-app/src/fontStyles/textStyles.css'
import SearchbarButton from './SearchbarButton'
import Searchbar from './Searchbar'

const LayoutSearchbarcomponent = () => {
  return (
    <div className='flex gap-8 items-center flex-wrap'>
       <Searchbar/>
       <SearchbarButton/>
    </div>
  )
}

export default LayoutSearchbarcomponent