import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Jumbotron,Button,Table} from 'react-bootstrap';

class AppCrypto extends Component{

  constructor(props) {
  super(props);
  this.state = {currencies: null};
}



componentDidMount() {
  const requestOptions = {
      method: 'GET',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*' }
  };
   fetch('http://localhost:8080/secretdata/allcurrency/',requestOptions)
        .then(results => {
          return results.json();
        })
        .then(data => {
          let currencies =data.results.map((curr) =>{
            return(
              <Table>
                 <thead>
                  <tr>
                    <th>ID</th>
                    <th>CURRENCY_NAME</th>
                    <th>CURRENCY_TICKER</th>
                  </tr>
                 </thead>
                 <tbody>
                    <tr>
                       <td>{curr.id} </td>
                       <td>{curr.currencyname}  </td>
                       <td>{curr.currencyticker}  </td>
                    </tr>
                 </tbody>
              </Table>
            )
          })
          this.setState({currencies:currencies});
          console.log("state",this.state.currencies);
})

}

  render(){
    return(
      <div className="container2">
        <div className="container1">
         {this.state.currencies}
        </div>
        </div>

    );
  }
}



export default AppCrypto;
