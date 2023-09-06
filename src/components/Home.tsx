import React, {useState,useEffect} from 'react'
import { json } from 'stream/consumers'

const Home = () => {
     const [windowWidth, setWindowWidth] = useState(window.innerWidth) 

     useEffect(()=>)

  return (
    <div>{windowWidth}</div>
  )
}

export default Home