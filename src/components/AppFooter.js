import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Navbar} from 'react-bootstrap';

class AppFooter extends Component{
  render(){
    return(
      <Navbar bg="dark" variant="dark" fixed="bottom">
        <Navbar.Brand>
        &copy; AV Illusions
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default AppFooter;
