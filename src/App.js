import React, { Component } from "react";
import { Route,Link } from "react-router-dom";
import './App.css';
import Data from './Data'
import People from './People'
import Help from './Help'
import Home from './Home'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library, dom } from "@fortawesome/fontawesome-svg-core";

import {
  faChartBar,
  faHandsHelping,
  faUserFriends
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faChartBar,
  faHandsHelping,
  faUserFriends
)



export default class App extends Component{
  renderMainRoutes() {
    return (
      <span>
        <Route exact path='/' component={Home}/>
        <Route exact path="/data" component={Data} />
        <Route exact path="/howtohelp" component={Help} />
        <Route exact path="/people" component={People} />
      </span>
    );
  }
  render(){

  return(
    <div className="App">
      <header className="App-header">
        <Link className="App-title" to='/'><h1>Covid-19 Impact</h1></Link>
        <div className='icons'>
        <Link to='/data'><FontAwesomeIcon className='icon' icon={faChartBar}/></Link>
        <Link to="/howtohelp"><FontAwesomeIcon className='icon' icon={faHandsHelping}/> </Link> 
        <Link to="/people"><FontAwesomeIcon className='icon' icon={faUserFriends}/> </Link>
        </div>
      </header>
      <div className="Body">
        {this.renderMainRoutes()}


      </div>
    </div>
  );
}

}
