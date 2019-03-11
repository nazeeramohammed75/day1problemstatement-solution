//Component is a class so kept in Flower braces
import React, { Component } from "react";
class ExternalComponent extends Component {

    //the render() method
    //returns HTML DOM object with only single parent(Top level <div> or <table>)
    render(){
        return (<div>
                <h2>This is a External Component </h2>                
            </div>);
    }
}
//default is only component - with JSX
//if it is .js file then multiple can be declared
export default ExternalComponent;