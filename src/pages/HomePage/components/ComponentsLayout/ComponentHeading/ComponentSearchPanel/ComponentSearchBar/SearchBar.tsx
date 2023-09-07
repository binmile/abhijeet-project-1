import { clear } from 'console'
import React from 'react'

const Searchbar = () => {

  const [searchText, setSearchText] = React.useState('Profession, position')

  const clearSearchText = () => setSearchText('')

  const handleInputText = ( e: { target: { value: React.SetStateAction<string> } } ) => setSearchText(e.target.value)
  
  

  return (
    <div className='md:w-[400px] w-[230x] border-2 rounded-[30px] p-1 md:p-3 border-black'>
         

         <input
          className='searchBarFont outline-none text-center' 
          type="text "
           value={searchText}
           onClick={clearSearchText}
           onChange={handleInputText}
           />
    </div>
  )
}

export default Searchbar