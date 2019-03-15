import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Jumbotron,Button} from 'react-bootstrap';

class AppHome extends Component{

  render(){
    return(
      <Jumbotron>
        <h1>Ciao , Leute!</h1>
        <p>
        Place to boost up life
        </p>
        <p>
        <Button variant="primary">Learn more</Button>
        </p>
        </Jumbotron>
    );
  }
}

export default AppHome;
