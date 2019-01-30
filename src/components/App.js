import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './AppHeader.js'
import AppFooter from './AppFooter.js'
import AppMenuSwitch from './AppMenuSwitch';

class App extends Component{
  render(){
    return (
      <div>
      <AppHeader />
      <AppMenuSwitch />
      <AppFooter />
      </div>
    );
  }
}

export default App;
