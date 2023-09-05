
import React,{ useState } from "react"

const Greet = ()=> {
  const [name ,setName ] = useState('mario')
const clickHandler = ()=>{
  setName('luigi')
}
return(
  <div>
    <h2>homepage</h2>
    <p>{name}</p>
    <button onClick={clickHandler}>click me</button>
  </div>
)
}
export default Greet