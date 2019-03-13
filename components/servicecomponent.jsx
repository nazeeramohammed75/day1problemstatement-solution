import React, { Component } from "react";
import ProductService from "./../services/productservice.js";
class ServiceComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Products: [],
      Message: "",
      Product: {}
    };
    this.serv = new ProductService();
  }
  componentDidMount() {
    this.serv
      .getProducts()
      .then(data => data.json()) // subscription to ge data
      .then(data => {
        // received the data and process
        this.setState({ Products: data });
        this.setState({ Message: "Call is Successful" });
      })
      .catch(error => {
        // receive error
        this.setState({ Message: `Call is failed ${error.status}` });
      });
  }
  handlePostClick() {
    let product = {
      ProductId: "Prd 002",
      ProductName: "Iron",
      Manufacturer: "Bajaj",
      CategoryName: "ECTL",
      Description: "Power Iron",
      BasePrice: 1200
    };
    this.serv
      .postProduct(product)
      .then(data => data.json())
      .then(data => {
        this.setState({ Product: data });
        this.setState({
          Message: "Data Posted Successfully"
        });
      })
      .catch(error => {
        this.setState({ Message: `Call is failed ${error.status}` });
      });
  }
  render() {
    return (
      <div className="container">
        <h3>Receive Response From Service</h3>
        <div className="container">
          The Response from Service is
          <br />
          {JSON.stringify(this.state.Products)}
        </div>
        <hr />
        <div className="container">{this.state.Message}</div>
        <hr />
        <input
          type="button"
          value="Post"
          onClick={this.handlePostClick.bind(this)}
          className="btn btn-success"
        />
        <hr/>
        <div className="container">
           Posted data
           <br/>
           {JSON.stringify(this.state.Product)}
        </div>
      </div>
    );
  }
}

export default ServiceComponent;