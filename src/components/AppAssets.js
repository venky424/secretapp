import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Jumbotron,Button} from 'react-bootstrap';

class AppAssets extends Component{
  render(){
    return(
      <Jumbotron>
        <h1>Ciao , Assets!</h1>
        <p>
        Place to boost up yourself
        </p>
        <p>
        <Button variant="primary">Learn more</Button>
        </p>
        </Jumbotron>

    );
  }
}



export default AppAssets;
