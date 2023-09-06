import React, {useState,useEffect} from 'react'
import { json } from 'stream/consumers'

const Home = () => {
    const [resourceType, setResourceType]= useState('posts')
    const [items,setItems]= useState([])
    useEffect(()=>{
      fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
    }, [resourceType])    

  return (
    <>
    <div>
        <button onClick={()=>setResourceType('posts ')}>Posts</button>
        <button onClick={()=>setResourceType("users ")}>users</button>
        <button onClick={()=> setResourceType('comments ')}>comments</button>
    </div>
    <h1>{resourceType}</h1>
    {items.map((items)=>{
      return <p>{JSON.stringify(items)}</p>
    })}
    </>
  )
}

export default Home