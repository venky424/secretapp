import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'react-bootstrap';

class AppAbout extends Component{
  render(){
    return(
      <div className="container-fluid">
        <h1>Doc Converter</h1>
        <p>
        <Button variant="primary">Learn more</Button>
        </p>
      </div>


    );
  }
}



export default AppAbout;
