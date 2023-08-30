import React, {Component} from "react";

type WelcomeProps = {
    name: string;
    heroName: string;
  };

class Welcome extends Component<WelcomeProps> {
    render (){
        return <h1>Welcome {this.props.name} aka {this.props.heroName}</h1>;
    }
}
export default Welcome;