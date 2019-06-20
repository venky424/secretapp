import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Carousel,Jumbotron} from 'react-bootstrap';
import '../css/AppDetailsSlider.css';

class AppDetailsSlider extends Component{

  render(){

    return(
<Jumbotron className="container bg-dark text-white" >
     <Carousel className="container " align="center">
 <Carousel.Item align="center">
 <img
   className="d-block w-100"
   src="../images/FirstSlide.jpg"
 />
   <Carousel.Caption className="d-none d-md-block">
     <h3>First slide label</h3>
     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
   </Carousel.Caption>
 </Carousel.Item>
 <Carousel.Item align="center">
 <img
   className="d-block w-100"
   src="../images/SecondSlide.jpg"
 />
   <Carousel.Caption  className="d-none d-md-block">
     <h3>Second slide label</h3>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
   </Carousel.Caption>
 </Carousel.Item >
 <Carousel.Item align="center">
 <img
   className="d-block w-100"
   src="../images/ThirdSlide.jpg"
 />
   <Carousel.Caption className="d-none d-md-block">
     <h3>Third slide label</h3>
     <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
   </Carousel.Caption>
 </Carousel.Item>
</Carousel>
</Jumbotron>


    );
  }
}



export default AppDetailsSlider;
