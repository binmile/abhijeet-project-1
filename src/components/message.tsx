import React, {Component} from "react";

type MessageState = {
    message: string;
  }

class Message extends Component<{}, MessageState>{

    constructor(props: {}){
        super(props)
         this.state = {
            message: "welcome visitor",
         }
    }

    changeMessage(){
        this.setState({
            message: "Thank you for subscribing"
        })
    }

    render (){
        
        return( 
        <div>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.changeMessage()}>subscribe</button>
        </div>
        
        
        )
    }
}
export default Message;