import React, {useState,useEffect} from 'react'
import { json } from 'stream/consumers'

const Home = () => {
     const [windowWidth, setWindowWidth] = useState(window.innerWidth) 

     const handleResize= ()=>{
      setWindowWidth(window.innerWidth)
     }

     useEffect(()=>{
      window.addEventListener('resize',handleResize)
     }, [])

  return (
    <div>{windowWidth}</div>
  )
}

export default Home