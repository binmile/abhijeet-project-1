import React from 'react'

interface buttonProps{
  text:string;
}

const Button:React.FC<buttonProps> = ({text}) => {
  return (
    <div>
      <button>{text}</button> 
    </div>
  )
}

export default Button