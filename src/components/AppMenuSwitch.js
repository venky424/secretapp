import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Switch,Route } from 'react-router-dom';
import AppHome from './AppHome.js';
import AppExpenses from './AppExpenses.js';
import AppExpHistory from './AppExpHistory.js';
import AppTips from './AppTips.js';
import AppCrypto from './AppCrypto.js';
import AppConverter from './AppConverter.js';
import AppAbout from './AppAbout.js';
import AppDetailsSlider from './AppDetailsSlider.js';
import {Jumbotron,Button} from 'react-bootstrap';


class AppMenuSwitch extends Component{
  render(){
    return(
      <Switch>
      <Route exact path='/' component={AppHome}></Route>
      <Route exact path='/expenses' component={AppExpenses}></Route>
      <Route exact path='/exphistory' component={AppExpHistory}></Route>
      <Route exact path='/about' component={AppAbout}></Route>
    </Switch>
    );
  }
}



export default AppMenuSwitch;
