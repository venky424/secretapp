import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './AppHeader.js'
import AppFooter from './AppFooter.js'
import AppHome from './AppHome.js'

class App extends Component{
  render(){
    return (
      <div>
      <AppHeader />
      <AppFooter />
      </div>
    );
  }
}

export default App;
