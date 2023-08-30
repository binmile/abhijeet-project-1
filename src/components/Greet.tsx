import React from "react";

interface GreetProps {
    name: string;
    heroName: string;
    children?: React.ReactNode;
}

const Greet: React.FC<GreetProps> = (props)=>{
    console.log(props)
    return(
       <div> 
        <h1>hello {props.name} aka {props.heroName}</h1>
        {props.children}
        </div>
    ) 
}

export default Greet;
