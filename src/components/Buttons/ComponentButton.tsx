import React from 'react'

interface ComponentButtonProps{
  text:string;
  className?: string
}

const ComponentButton:React.FC<ComponentButtonProps> = ({text,className}) => {
  return (
    <div className='p-3 whitespace-nowrap flex items-center justify-center'>
      <button className={'style'}>{text}</button> 
    </div>
  )
}

export default ComponentButton