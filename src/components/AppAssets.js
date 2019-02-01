import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Jumbotron,Button,Table} from 'react-bootstrap';

class AppAssets extends Component{
  render(){
    return(
      <div>
      <div>

     </div>
     <div className="container-fluid">
        <Table striped bordered hover variant="dark">
        <thead>
        <tr>
          <th>ASSET NO</th>
          <th>ASSET CLASS</th>
          <th>ASSET NAME</th>
          <th>ASSET QUANTITY</th>
          <th>ASSET PRICE</th>
          <th>ASSET LOCATION</th>
          <th>ASSET CURRENCY</th>
          <th>ASSET FX RATE</th>
        </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>EQUITIES</td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
          </tr>
          <tr>
            <td>2</td>
            <td>BONDS</td>
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



export default AppAssets;
