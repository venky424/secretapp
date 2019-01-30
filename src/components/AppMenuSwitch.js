import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Switch,Route } from 'react-router-dom';
import AppHome from './AppHome.js'

class AppMenuSwitch extends Component{
  render(){
    return(
      <Switch>
      <Route path='/' component={AppHome}></Route>
    </Switch>
    );
  }
}



export default AppMenuSwitch;
