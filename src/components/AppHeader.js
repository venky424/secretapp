import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Nav, NavItem,Form,FormControl,Button} from 'react-bootstrap';
import { NavLink,Switch,Route } from 'react-router-dom';

class AppHeader extends Component{
  render(){
    return(
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand >S3CR3T</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav variant="pills" className="AppNav">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/Assets">Assets</Nav.Link>
          <Nav.Link href="/liabilities">Liabilities</Nav.Link>
          <Nav.Link href="/tips">Tips</Nav.Link>
          <Nav.Link href="/crypto">Crypto</Nav.Link>
          <Nav.Link href="/converter">Converter</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        <Form inline>
          <FormControl type="text" placeholder="Type Here to Search" className="mr-sm-4" />
          <Button variant="outline-info" className="mr-sm-2">Search</Button>
          <Button variant="success" className="mr-sm-2">Login</Button>
          <Button variant="info" className="mr-sm-2">Signup</Button>
        </Form>
      </Navbar>

    );
  }
}



export default AppHeader;
