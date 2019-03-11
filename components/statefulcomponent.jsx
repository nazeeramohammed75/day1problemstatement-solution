import React, { Component } from 'react';
class StatefulComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            message :""
        };
    }

    handleMessageChange(e){
        //update the straight property using value entered into HTML element
        this.setState({message:e.target.value});
    }

    handleButtonOnClick(e) {
        if(this.state.message.length > 0) {
            let str = this.state.message.toUpperCase();
            this.setState({message:str});
        }
    }

    render(){
        return(
            <div className="container">
                <label htmlFor="msg">Message</label>
                <input type="text" 
                       value={this.state.message}
                       className="form-control"
                       onChange={this.handleMessageChange.bind(this)} />
                <hr />
                <input type="button" 
                       value="Display" 
                       className="btn btn-success" 
                       onClick={this.handleButtonOnClick.bind(this)} />
                <br />
                <div className="container" > {this.state.message}</div>
            </div>
        );
    }

}
export default StatefulComponent;