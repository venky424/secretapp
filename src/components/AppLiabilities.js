import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Jumbotron,Button,Table,Image} from 'react-bootstrap';

class AppLiabilities extends Component{
  render(){
    return(
      <div>
      <div>

      </div>
      <div className="container-fluid">
        <Table striped bordered hover variant="dark">
          <thead>
          <tr>
            <th> LIABILITY NO </th>
            <th> LIABILITY CLASS </th>
            <th>LIABILITY NAME</th>
            <th>LIABILITY QUANTITY</th>
            <th>LIABILITY PRICE</th>
            <th>LIABILITY LOCATION</th>
            <th>LIABILITY CURRENCY</th>
            <th>LIABILITY FX RATE</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>1</td>
            <td>LOANS</td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
          </tr>
          <tr>
            <td>2</td>
            <td>EMI</td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
          </tr>
          </tbody>
        </Table>
        </div>
        </div>
    );
  }
}



export default AppLiabilities;
