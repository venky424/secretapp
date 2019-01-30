import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Switch,Route } from 'react-router-dom';
import AppHome from './AppHome.js'
import AppAssets from './AppAssets.js'
import AppLiabilities from './AppLiabilities.js'
import AppTips from './AppTips.js'
import AppAbout from './AppAbout.js'

class AppMenuSwitch extends Component{
  render(){
    return(
      <Switch>
      <Route path='/' component={AppHome}></Route>
      <Route path='/assets' component={AppAssets}></Route>
      <Route path='/liabilities' component={AppLiabilities}></Route>
      <Route path='/tips' component={AppTips}></Route>
      <Route path='/about' component={AppAbout}></Route>
    </Switch>
    );
  }
}



export default AppMenuSwitch;
