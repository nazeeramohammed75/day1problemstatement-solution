import React, { Component } from 'react';

class ListProductsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
           
        }
    }

    getProduct(prd) {
        alert("In getProduct to edit the row");

         //1. Local JSON Object         
        //  this.refs.ProductId.value = this.props.prd.product.ProductId;
        //  this.refs.ProductName.value = this.props.prd.product.ProductName;

         this.refs.ProductId.value = prd.ProductId;
         this.refs.ProductName.value = prd.ProductName;
 
         alert("In getProduct to edit the row 2 ");

         //2. Logic here to pass the local product object to MainComponent
         alert(JSON.stringify(product));
         this.props.editProductClick(product);        
    }

    render() { 
        return ( <div className="container">
                   <div className="container">
                   <table className="table table-bordered table-stripped">
                    <thead>                        
                        <tr>
                            <td>Product Id</td>
                            <td>Product Name</td>                
                        </tr>
                        </thead>
                        <tbody >  
                            {this.props.listProductReducer.map((prd, idx) => (
                                    <TableRow key={idx} prd={prd} 
                                    selectedProduct={this.getProduct.bind(this)} />                                
                                ))
                                }
                        </tbody>
         </table>
                    </div>
                 </div> );
    }
}
 
class TableRow extends Component {

    constructor(props){
        super(props);
    }

    handleRowClick(e) {
        //using selectedProduct() props type function to which the props product is passed
        this.props.selectedProduct(this.props.prd.product);
    }

    render() {
        return (
              <tr onClick={this.handleRowClick.bind(this)}>
                 <td>{this.props.prd.product.ProductId}</td>
                 <td>{this.props.prd.product.ProductName}</td>                 
            </tr>     
        );
    }
}

export default ListProductsComponent;