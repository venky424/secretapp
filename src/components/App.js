import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './AppHeader.js'
import AppFooter from './AppFooter.js'
import AppMenuSwitch from './AppMenuSwitch';
import Responsive from 'react-responsive-decorator';

@Responsive
class App extends Component{

state={isMobile:false}

componentDidMount (){
         this.props.media({ minWidth: 768 },() =>{
           this.setState({
             isMobile:false
           });
         });

         this.props.media({ maxWidth: 768 },() =>{
           this.setState({
             isMobile:true
           });
         });

}

  render(){

     const { isMobile } = this.state;

    return (
      <div>
      {isMobile ?
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
      :
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
      }
      </div>

    );
  }
}

export default App;
