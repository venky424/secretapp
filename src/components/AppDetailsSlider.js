import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Carousel,Jumbotron} from 'react-bootstrap';
import '../css/AppDetailsSlider.css';
import FirstSlide from '../images/FirstSlide.jpg';
import SecondSlide from '../images/SecondSlide.jpg';
import ThirdSlide from '../images/ThirdSlide.jpg';

class AppDetailsSlider extends Component{

  constructor(props) {
  super(props);
  this.state = {weatherinfo: [
    {temp:null,maxtemp:null,mintemp:null,overcast:null}
  ]
};
}

componentDidMount() {
   fetch('http://api.openweathermap.org/data/2.5/weather?q=Frankfurt am Main,de&APPID=a3319418504a936d38183ccbc6d1fddb',{
     method:'GET',
     headers:{
       'Content-Type':'application/json'
     }
   })
   .then( function(response){
     return response.json();
   })
   .then (weatherinfo => {
     console.log(weatherinfo);
     this.setState({weatherinfo:weatherinfo});

  });

}

  render(){

    return(

     <Carousel className="container" align="center" color="black">
 <Carousel.Item align="center">
 <img
   className="d-block w-100 h-50"
   src={FirstSlide} alt="FirsSlide"
 />
   <Carousel.Caption className="d-none d-md-block">
     <h3>First slide label</h3>
     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
   </Carousel.Caption>
 </Carousel.Item>
 <Carousel.Item align="center">
 <img
   className="d-block w-100 h-80"
   src={SecondSlide} alt="SecondSlide"
 />
   <Carousel.Caption  className="d-none d-md-block">
     <h3>Second slide label</h3>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
   </Carousel.Caption>
 </Carousel.Item >
 <Carousel.Item align="center">
 <img
   className="d-block w-100 h-80"
   src={ThirdSlide} alt="ThirdSlide"
 />
   <Carousel.Caption className="d-none d-md-block">
     <h3>Third slide label</h3>
     <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
   </Carousel.Caption>
 </Carousel.Item>
</Carousel>


    );
  }
}



export default AppDetailsSlider;
