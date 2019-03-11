//Component - is itself a base class
import React, {Component} from "react";
const Categories = ["ECTS", "ECLS", "FOOD"];
const Manufacturers =["MS Tech", "LS Power", "TS FOOD"];

class ProductUIComponent extends Component {
constructor(props) {
    super(props);
    //State object is an JSON type property
    this.state ={
        ProductId:0,
        ProductName:"",
        BasePrice:0,
        CategoryName:"",
        Manufacturer:"",
        Description:"",
        Categories:Categories,
        Manufacturers:Manufacturers,
        Products: [],
        showError : false,
        showErrorMessage : "",
        finalerrorMessagesList =[]        
    };
}

  validate(name, value) {
    
    let errorMessagesList = this.state.finalerrorMessagesList.slice();

    if (name == "ProductId") {
      if (value.length < 0 || value < 0) {       
        errorMessagesList.push({
            showErrorMessage :  "ProductId is Must and Must be +Ve",
            showError : true
        });       
      } else {
        errorMessagesList.push({
            showErrorMessage :  "",
            showError : false
        });
      }
      this.setState({finalerrorMessagesList : errorMessagesList});
    }
    
    if (name == "ProductName") {
        if (value.length <= 0) {       
            errorMessagesList.push({
                showErrorMessage :  "ProductName is Mandatory.",
                showError : true
            });       
          } else {
            errorMessagesList.push({
                showErrorMessage :  "",
                showError : false
            });
          }
      }
      this.setState({finalerrorMessagesList : errorMessagesList});  
  }

//Single method to listen change event for each UI element
handleValueChanges(e){
    this.setState({[e.target.name]:e.target.value});        
    //alert(JSON.stringify(e.target.name));
    this.setState({ [e.target.name]: e.target.value });
    this.validate(e.target.name, e.target.value);
}
handleClearValues(e){
    this.setState({ProductId:0});
    this.setState({ProductName:""});
    this.setState({BasePrice:0});
    this.setState({CategoryName:""});
    this.setState({Manufacturer:""});        
    this.setState({Description:""});  
}

handleSaveClick(e){
    //1. Define a temporary array having same schema of products
    let tempProdArray = this.state.Products.slice();
    //2. push the data in the tempProdArray
    tempProdArray.push(
        {
            ProductId : this.state.ProductId,
            ProductName : this.state.ProductName,
            BasePrice : this.state.BasePrice,
            CategoryName : this.state.CategoryName,
            Manufacturer : this.state.Manufacturer,
            Description : this.state.Description
        }
    );
    //3. update the state of the products array
    this.setState({Products : tempProdArray});
}
handleDeleteClick(e) {    
    let tempUpdateProd = this.state.Products.find( prd => prd.ProductId === this.state.ProductId);
    let index = this.state.Products.indexOf(tempUpdateProd);    
    this.state.Products.splice(index, 1);
    //alert(this.state.Products);
}

handleUpdateClick(e) { 
    //1. Get the current product from State or props
    //2. Modify the data into temp array
    //3. capture the current modification in the temporary array to update 
    //the current record in the table
    //4. Finally update the data into the products array object   
    let tempUpdateProd = this.state.Products.find( prd => prd.ProductId === this.state.ProductId);
    let index = this.state.Products.indexOf(tempUpdateProd);
    this.state.Products.splice(index, 1);  
     let tempUpdateProdArray = this.state.Products.slice();
    //2. push the data in the tempProdArray
    tempUpdateProdArray.push(
        {
            ProductId : this.state.ProductId,
            ProductName : this.state.ProductName,
            BasePrice : this.state.BasePrice,
            CategoryName : this.state.CategoryName,
            Manufacturer : this.state.Manufacturer,
            Description : this.state.Description
        }
    );
    //3. update the state of the products array
    this.setState({Products : tempUpdateProdArray});
}
//ends here

getProduct(prd) {
    this.setState({
    ProductId : prd.ProductId,
    ProductName : prd.ProductName,
    BasePrice : prd.BasePrice,
    CategoryName : prd.CategoryName,
    Manufacturer : prd.Manufacturer,
    Description : prd.Description
    });
}

render() {
    return (<div className="container">
            <div className="container">
                <div className="form-group">
                    <div className="alert alert-danger" hidden={!this.state.showError}>
                        {this.state.showErrorMessage}
                    </div>
                    <label htmlFor="ProductId">ProductId</label>
                    <input type="text" name="ProductId" className="form-control" 
                    value={this.state.ProductId}
                    onChange={this.handleValueChanges.bind(this)}/>                        
                </div>
                <div className="form-group">
                <div className="alert alert-danger" hidden={!this.state.showError}>
                        {this.state.showErrorMessage}
                    </div>
                    <label htmlFor="ProductName">ProductName</label>
                    <input type="text" name="ProductName" className="form-control" 
                    value={this.state.ProductName}
                    onChange={this.handleValueChanges.bind(this)}/>                        
                </div>
                <div className="form-group">
                <div className="alert alert-danger" hidden={!this.state.showError}>
                        {this.state.showErrorMessage}
                    </div>
                    <label htmlFor="BasePrice">BasePrice</label>
                    <input type="text" name="BasePrice" className="form-control" 
                    value={this.state.BasePrice}
                    onChange={this.handleValueChanges.bind(this)}/>                        
                </div>
                <div className="form-group">
                    <div className="alert alert-danger" hidden={!this.state.showError}>
                        {this.state.showErrorMessage}
                    </div>
                    <label htmlFor="Description">Description</label>
                    <textarea type="text" name="Description" className="form-control" 
                    value={this.state.Description}
                    onChange={this.handleValueChanges.bind(this)} />                        
                </div>
                <div className="form-group">
                    <div className="alert alert-danger" hidden={!this.state.showError}>
                        {this.state.showErrorMessage}
                    </div>
                    <label htmlFor="CategoryName">CategoryName</label>
                    <select name="CategoryName" className="form-control" 
                      value={this.state.CategoryName}
                      onChange={this.handleValueChanges.bind(this)}>
                         {this.state.Categories.map((val, idx) => 
                         (
                          <Options key={idx} data={val} />
                         ))}                      
                      </select>
                </div>                            
              
                <div className="form-group">
                    <div className="alert alert-danger" hidden={!this.state.showError}>
                            {this.state.showErrorMessage}
                        </div>
                    <label htmlFor="Manufacturer">Manufacturer</label>
                    <select  name="Manufacturer" className="form-control" 
                      value={this.state.Manufacturer}
                      onChange={this.handleValueChanges.bind(this)}>
                      {this.state.Manufacturers.map((val, idx) => (
                          <Options key={idx} data={val} />
                      ))}
                      </select>
                </div>               
                <div className="form-group">
                    <input type="button" value="New" className="btn btn-default" 
                    onClick={this.handleClearValues.bind(this)}/>
                    
                    <input type="button" value="Save" className="btn btn-success"   
                    onClick={this.handleSaveClick.bind(this)}/>

                     <input type="button" value="Update" className="btn btn-success" 
                    onClick={this.handleUpdateClick.bind(this)}/>

                    <input type="button" value="Delete" className="btn btn-success"   
                    onClick={this.handleDeleteClick.bind(this)}/>
                </div>
        </div>
        <div className="container"> 
         <table className="table table-bordered table-stripped">
           <thead>
             <tr>
                 <td>Product Id</td>
                 <td>Product Name</td>
                 <td>Base Price</td>
                 <td>Category Name</td>
                 <td>Manufacturer</td>
                 <td>Description</td>
              </tr>
            </thead>
            <tbody>
                {
                    this.state.Products.map((prd, idx) => (
                        <TableRow 
                                  key={idx} 
                                  product={prd} 
                                selectedProduct={this.getProduct.bind(this)}
                               // updateProduct={this.modifyProduct.bind(this)}
                         />
                        )
                    )
                }
            </tbody>
         </table>
        </div>
    </div>);
 }
}

class Options extends Component {
    render() {
        return (<option value={this.props.data}>{this.props.data}</option>);
    }
}

class TableRow extends Component {

    constructor(props){
        super(props);
    }
   
    handleRowClick(e) {
        //using selectedProduct() props type function to which the props product is passed
        this.props.selectedProduct(this.props.product);
    }
    render() {
        return (
              <tr onClick={this.handleRowClick.bind(this)}>
                 <td>{this.props.product.ProductId}</td>
                 <td>{this.props.product.ProductName}</td>
                 <td>{this.props.product.BasePrice}</td>
                 <td>{this.props.product.CategoryName}</td>
                 <td>{this.props.product.Manufacturer}</td>
                 <td>{this.props.product.Description}</td>
            </tr>     
        );
    }
}

export default ProductUIComponent;