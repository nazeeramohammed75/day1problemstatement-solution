import React, { Component } from "react";
class MiscellaneousOperations extends Component {

    constructor(props){
        super(props);
        this.state = {
            value1 :"",
            // value2 :"",
            result : 0
        };
    }

    handleValue1Change(e){
        //update the straight property using value entered into HTML element
        this.setState({value1:e.target.value});        
    }
    // handleValue2Change(e){
    //     //update the straight property using value entered into HTML element        
    //     this.setState({value2:e.target.value});
    // }

    handleSquareButtonOnClick(e) {
        if(this.state.value1.length > 0) {
            var AVal = parseInt(this.state.value1);            
            var result = AVal * AVal ;
            this.setState({result:result});            
        }
    }

    handleSquareRootButtonOnClick(e) {
        if(this.state.value1.length > 0) {
            var AVal = parseInt(this.state.value1);            
            var result = Math.sqrt(AVal);
            this.setState({result:result});            
        }
    }

    handleSinThetaButtonOnClick(e) {
        if(this.state.value1.length > 0) {
            var AVal = parseInt(this.state.value1);            
            var result = Math.sin(AVal);
            this.setState({result:result});            
        }
    }

    handleCosThetaButtonOnClick(e) {
        if(this.state.value1.length > 0) {
            var AVal = parseInt(this.state.value1);            
            var result = Math.cos(AVal);
            this.setState({result:result});            
        }
    }

   render() {
    return (
        <div className="container">
        <h2>Miscellaneous Operations</h2> 
        <label htmlFor="msg">Value for A : </label>
        <input type="text" 
            value={this.state.value1}
            className="form-control"
            onChange={this.handleValue1Change.bind(this)} />      

        <hr />
        <input type="button" 
            value="Square" 
            className="btn btn-success" 
            onClick={this.handleSquareButtonOnClick.bind(this)} />
 &nbsp;
        <input type="button" 
            value="SquareRoot" 
            className="btn btn-success" 
            onClick={this.handleSquareRootButtonOnClick.bind(this)} />
 &nbsp;
        <input type="button" 
            value="Sin" 
            className="btn btn-success" 
            onClick={this.handleSinThetaButtonOnClick.bind(this)} />
 &nbsp;
        <input type="button" 
            value="Cos" 
            className="btn btn-success" 
            onClick={this.handleCosThetaButtonOnClick.bind(this)} />
        <br />
        <br />
        <label htmlFor="msg">Final Result : </label> <div className="container" > {this.state.result}</div>
        </div>
        );
    } 
}
export default MiscellaneousOperations;