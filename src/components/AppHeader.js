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
          <Nav.Link href="#features">Assets</Nav.Link>
          <Nav.Link href="#pricing">Liabilities</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    );
  }
}

export default AppHeader;
