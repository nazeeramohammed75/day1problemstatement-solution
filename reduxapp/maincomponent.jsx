import React, { Component } from 'react';
import AddProductComponent from "./../reduxapp/components/addproductcomponent.jsx";
import ListProductsComponent from "./../reduxapp/components/listproductscomponent.jsx";
//import 'connect()' from react-redux
import { connect } from 'react-redux';

//Importing action-creator
import { addProduct } from "./actions/actions.js";
import { editProduct } from "./actions/actions.js";

class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        //1. Define the local prop types so that they can be used by the 
        //AddProductComponent and ListProductComponent

        //NOTE : The below line is to destructing syntax of ES6
        //The 'dispatch' will be the method type property
        // the 'visibleproducts' will be the array type property
        const { dispatch, visibleproducts,getprd } = this.props;
        //The 'AddProductClick' will be used to dispatch request
        //to the addProduct() action-creator with 'product' as a payload
        return (<div className="container">
                    <h2> Add Product </h2>
                    <AddProductComponent 
                        AddProductClick = {product => dispatch(addProduct(product))}
                        displayprd={getprd}
                    />
                    <h2>List of Products : </h2>
                    <ListProductsComponent 
                        listProductReducer = {visibleproducts}  />

                  <ListProductsComponent 
                    editProductClick  = {product => dispatch(editProduct(product))}  
                    />
                </div> 
        );
    }
}
 
//Method to map the state-to-props
function mapStateToProps(state) {
    return {visibleproducts : state.listProductReducer, getprd:state.editProductReducer};
}

//Map all states from all child components to props of MainComponent
export default connect(mapStateToProps)(MainComponent);

//export default MainComponent;