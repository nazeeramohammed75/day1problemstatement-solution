import React, { Component } from "react";
class ArithematicOperations extends Component {

    constructor(props){
        super(props);
        this.state = {
            value1 :"",
            value2 :"",
            result : 0
        };
    }

    handleValue1Change(e){
        //update the straight property using value entered into HTML element
        this.setState({value1:e.target.value});        
    }
    handleValue2Change(e){
        //update the straight property using value entered into HTML element        
        this.setState({value2:e.target.value});
    }

    handleAddButtonOnClick(e) {
        if(this.state.value1.length > 0 && this.state.value2.length > 0) {
            var AVal = parseInt(this.state.value1);
            var BVal = parseInt(this.state.value2);
            var result = AVal + BVal ;
            this.setState({result:result});            
        }
    }

    handleSubButtonOnClick(e) {
        if(this.state.value1.length > 0 && this.state.value2.length > 0) {
            var AVal = parseInt(this.state.value1);
            var BVal = parseInt(this.state.value2);
            var result = AVal - BVal ;
            this.setState({result:result});            
        }
    }

    handleMultiplyButtonOnClick(e) {
        if(this.state.value1.length > 0 && this.state.value2.length > 0) {
            var AVal = parseInt(this.state.value1);
            var BVal = parseInt(this.state.value2);
            var result = AVal * BVal ;
            this.setState({result:result});            
        }
    }

    handleDivideButtonOnClick(e) {
        if(this.state.value1.length > 0 && this.state.value2.length > 0) {
            var AVal = parseInt(this.state.value1);
            var BVal = parseInt(this.state.value2);
            var result = AVal / BVal ;
            this.setState({result:result});            
        }
    }

   render() {
    return (
        <div className="container">
        <h2>Arithematic Operations</h2> 
        <label htmlFor="msg">Value for A : </label>
        <input type="text" 
            value={this.state.value1}
            className="form-control"
            onChange={this.handleValue1Change.bind(this)} />

        <label htmlFor="msg">Value for B : </label>
         <input type="text" 
            value={this.state.value2}
            className="form-control"
            onChange={this.handleValue2Change.bind(this)} />

        <hr />
        <input type="button" 
            value="Addition" 
            className="btn btn-success" 
            onClick={this.handleAddButtonOnClick.bind(this)} />
 &nbsp;
        <input type="button" 
            value="Substract" 
            className="btn btn-success" 
            onClick={this.handleSubButtonOnClick.bind(this)} />
 &nbsp;
        <input type="button" 
            value="Multiply" 
            className="btn btn-success" 
            onClick={this.handleMultiplyButtonOnClick.bind(this)} />
 &nbsp;
        <input type="button" 
            value="Divide" 
            className="btn btn-success" 
            onClick={this.handleDivideButtonOnClick.bind(this)} />
        <br />
        <br />
        <label htmlFor="msg">Final Result : </label> <div className="container" > {this.state.result}</div>
        </div>
        );
    } 
}
export default ArithematicOperations;