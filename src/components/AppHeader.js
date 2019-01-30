import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Navbar,Nav,NavItem} from 'react-bootstrap';

class AppHeader extends Component{
  render(){
    return(
      <Navbar inverse fixed="top">
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">S3CR3T</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem>
          Home
        </NavItem>
        <NavItem>
          Assets
        </NavItem>
        <NavItem>
          Liabilities
        </NavItem>
        <NavItem>
          About
        </NavItem>
      </Nav>
      </Navbar>
    );
  }
}

export default AppHeader;
