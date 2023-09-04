import React from 'react'

const Searchbar = () => {
  return (
    <div className='md:w-[400px] w-[230x] border-2 rounded-[30px] p-1 md:p-3 border-black'>
         <input className='searchBarFont outline-none text-center' type="text " defaultValue={'Profession, position '}/>
    </div>
  )
}

export default Searchbar