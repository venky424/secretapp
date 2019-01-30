import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Jumbotron,Button} from 'react-bootstrap';

class AppAbout extends Component{
  render(){
    return(
      <Jumbotron>
        <h1>About</h1>
        <p>
        <Button variant="primary">Learn more</Button>
        </p>
        </Jumbotron>

    );
  }
}



export default AppAbout;
