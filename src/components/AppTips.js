import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Jumbotron,Button} from 'react-bootstrap';

class AppTips extends Component{
  render(){
    return(
      <div className="container-fluid">
        <h1>Ciao , Tips!</h1>
        <p>
        <Button variant="primary">Learn more</Button>
        </p>
        </div>

    );
  }
}



export default AppTips;
