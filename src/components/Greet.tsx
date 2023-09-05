import React from 'react'

const clickHandler = () => {
    console.log('hello')
}
const clickHandlerAgain = (name:string):void=> {
    console.log('my name is '+ name)
}

const Greet = () => {
  return (
    <div>
        <h1>greetings</h1>
        <button onClick={clickHandler}>click here</button>
        <button onClick={()=>clickHandlerAgain('abhijeet')}>click me for my name</button>
    </div>
  )
}

export default Greet