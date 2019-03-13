import React, { Component } from 'react';

class AddProductComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.refs.ProductId.value = this.props.displayprd.ProductId;
        this.refs.ProductName.value = this.props.displayprd.ProductName;
    }

    handleSaveClick(e) {
        //1. Local JSON Object
        let product = {};
        product.ProductId = this.refs.ProductId.value;
        product.ProductName = this.refs.ProductName.value;

        //2. Logic here to pass the local product object to MainComponent
        alert(JSON.stringify(product));
        this.props.AddProductClick(product);

        //3. Clear textboxes
        this.refs.ProductId.value = "";
        this.refs.ProductName.value = "";
    }

    render() { 
        return ( <div className="container">
                    <div className="container">
                        <div className="form-group">                           
                            <label htmlFor="ProductId">ProductId</label>
                            <input type="text" name="ProductId" className="form-control" ref = "ProductId"
                            value={this.state.prd.ProductId}
                         />                        
                        </div>
                        <div className="form-group">                       
                            <label htmlFor="ProductName">ProductName</label>
                            <input type="text" name="ProductName" className="form-control" ref = "ProductName"
                            value={this.state.prd.ProductName} 
                          />                        
                        </div>
                        <br />                    
                    <div className="form-group">
                        <input type="button" value="Add Product" className="btn btn-success" 
                         onClick={this.handleSaveClick.bind(this)}  
                      />
                    </div>
                </div>
                </div> );
    }
}
 
export default AddProductComponent;