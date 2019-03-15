import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Jumbotron,Button,Table} from 'react-bootstrap';

class AppCrypto extends Component{

  constructor(props) {
  super(props);
  this.state = {currencies: null};
}



componentDidMount() {
   fetch('/secretdata/allcurrency/',{
     method:'GET',
     headers:{
       'Content-Type':'application/json'
     }
   })
   .then( function(response){
     return response.json();
   })
   .then(function(myJson){
     console.log(JSON.stringify(myJson));
   });

}

  render(){
    return(
      <div className="container2">
      <div className="container1">
       {}
      </div>
      </div>

    );
  }
}



export default AppCrypto;
