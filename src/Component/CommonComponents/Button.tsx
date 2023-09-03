import React from 'react'

interface buttonProps{
  text:string;
}

const Button:React.FC<buttonProps> = ({text}) => {
  return (
    <div className='rounded-3xl bg-red-600 p-2'>
      <button className='text-white'>{text}</button> 
    </div>
  )
}

export default Button