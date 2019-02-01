import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './AppHeader.js'
import AppFooter from './AppFooter.js'
import AppMenuSwitch from './AppMenuSwitch';

class App extends Component{
  render(){
    return (
      <div>
      <div className="Header">
      <AppHeader />
      </div>
      <div className="Appswitch">
      <br></br>
      <AppMenuSwitch />
      <br></br>
      </div>
      <div className="Footer">
      <AppFooter />
      </div>
      </div>
    );
  }
}

export default App;
