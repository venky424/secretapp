import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Nav, NavItem,Form,FormControl,Button} from 'react-bootstrap';

class AppHeader extends Component{
  render(){
    return(
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">S3CR3T</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#assets">Assets</Nav.Link>
          <Nav.Link href="#liabilities">Liabilities</Nav.Link>
          <Nav.Link href="#tips">Tips</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
        </Nav>
        <Form inline>
          <Button variant="outline-success" size="sm">Login</Button>
          <Button variant="outline-info" size="sm">Signup</Button>
        </Form>
      </Navbar>
    );
  }
}

export default AppHeader;
