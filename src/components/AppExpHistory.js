import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Jumbotron,Button,Table,Image} from 'react-bootstrap';

class AppExpHistory extends Component{
  render(){
    return(
      <div>
      <div>

      </div>
      <div className="container-fluid">
        <Table striped bordered hover variant="dark">
          <thead>
          <tr>
            <th> EXPENSE NO </th>
            <th> EXPENSE NAME </th>
            <th> EXPENSE PLACE</th>
            <th> EXPENSE CATEGORY</th>
            <th> EXPENSE PRICE</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>1</td>
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



export default AppExpHistory;
