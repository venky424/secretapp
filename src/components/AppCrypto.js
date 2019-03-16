import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Table} from 'react-bootstrap';

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
      return JSON.stringify(myJson);
   })
   .then (crypto => {
     this.setState({currencies:crypto});
     console.log(crypto);
  });

}

  render(){
    return(
      <div className="container-fluid">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
           <th>ID</th>
           <th>CURRENCY_NAME</th>
           <th>CURRENCY_TICKER</th>
          </tr>
        </thead>
        <tbody>
        {this.state.currencies.map(function(item, key){
            return(
              <tr key={key}>
                 <td>item.id</td>
                 <td>item.currencyname</td>
                 <td>item.currencyticker</td>
              </tr>
            )
        })}
        </tbody>
      </Table>
      </div>
    );
  }
}



export default AppCrypto;
