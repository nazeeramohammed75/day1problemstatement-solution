import React, { Component } from 'react';
import TableRow from "./TableRowComponent.jsx";
class StockComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            data: this.props.data
        };
    }
    render() { 
        return (
            <div className="container">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((d, i) => (
              <TableRow key={i} data={d} />
            ))}
          </tbody>
        </table>
      </div>
         );
    }
}
 
export default StockComponent;