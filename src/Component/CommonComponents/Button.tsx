import React from 'react'

interface buttonProps{
  text:string;
  className?: string
}

const Button:React.FC<buttonProps> = ({text,className}) => {
  return (
    <div className='p-3 whitespace-nowrap flex items-center justify-center'>
      <button className={'style'}>{text}</button> 
    </div>
  )
}

export default Button