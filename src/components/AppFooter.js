import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Navbar} from 'react-bootstrap';

class AppFooter extends Component{
  render(){
    return(
      <Navbar inverse fixed="bottom">
      <Navbar.Header>
        <Navbar.Brand>
          &copy; AV Illusions
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>
    );
  }
}

export default AppFooter;
