import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './AppHeader.js'
import AppFooter from './AppFooter.js'
import AppMenuSwitch from './AppMenuSwitch';
import Breakpoint, { BreakpointProvider } from 'react-socks';



class App extends Component{

  render(){


    return (
      <div>
      <Breakpoint small down>
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
      </Breakpoint>

      <Breakpoint medium only>
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
      </Breakpoint>
      <Breakpoint large up>
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
      </Breakpoint>
    </div>

    );
  }
}

export default App;
