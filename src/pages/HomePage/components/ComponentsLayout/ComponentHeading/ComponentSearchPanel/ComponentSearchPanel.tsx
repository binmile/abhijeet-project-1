import React from 'react'
import Button from '../../../../../../components/Button'
import '/home/abhijeet/Desktop/my-ts-tailwind-app/src/assests/fontStyles/textStyles.css'
import SearchbarButton from './ComponentSearchBar/SearchBarButton'
import Searchbar from './ComponentSearchBar/SearchBar'

const LayoutSearchbarcomponent = () => {
  return (
    <div className='flex gap-8 items-center flex-wrap'>
       <Searchbar/>
       <SearchbarButton/>
    </div>
  )
}

export default LayoutSearchbarcomponent