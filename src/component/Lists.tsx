import React from 'react'
import names from '../dummyData/Dummydata'


const Lists = () => {
    
    const listNames= names.map((Person)=>
    <h1> i am {Person.name}. My age is {Person.age} . my hobby is {Person.skill}</h1>
      )
    
    
  return (
    <div>
       
        {listNames}
       
    </div>
  )
}

export default Lists