import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Switch,Route } from 'react-router-dom';
import AppHome from './AppHome.js';
import AppAssets from './AppAssets.js';
import AppLiabilities from './AppLiabilities.js';
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
      <Route exact path='/assets' component={AppAssets}></Route>
      <Route exact path='/liabilities' component={AppLiabilities}></Route>
      <Route exact path='/tips' component={AppTips}></Route>
      <Route exact path='/crypto' component={AppCrypto}></Route>
      <Route exact path='/converter' component={AppConverter}></Route>
      <Route exact path='/about' component={AppAbout}></Route>
      <Route exact path='/appslides' component={AppDetailsSlider}></Route>
    </Switch>
    );
  }
}



export default AppMenuSwitch;
