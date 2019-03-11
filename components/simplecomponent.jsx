//Component is a class so kept in Flower braces
import React, { Component } from "react";
import ExternalComponent from "./externalcomponent.jsx";
class SimpleComponent extends Component {

    //the render() method
    //returns HTML DOM object with only single parent(Top level <div> or <table>)
    render(){
        return (<div>
                <h2>Hello World!!</h2>
                <h3>{this.props.message}</h3>
                <ChildComponent />
                <ExternalComponent />
            </div>);
    }
}
//default is only component - with JSX
//if it is .js file then multiple can be declared


class ChildComponent extends Component {

    render() {
        return (<div>
            <h3>I am a Child Component </h3>
            <h4>I am a friend of Child Component   </h4>
        </div>);
    }
}

export default SimpleComponent;