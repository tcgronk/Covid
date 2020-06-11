import React from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './chart'
import WomenWheel from './WomenWheel';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Covid-19 Impact</h1>
        <div className='icons'>
        <FontAwesomeIcon className='icon' icon={faChartBar}/>
        <FontAwesomeIcon className='icon' icon={faHandsHelping}/> 
        <FontAwesomeIcon className='icon' icon={faUserFriends}/> 
        </div>
      </header>
      <h2>Covid Cases by Day </h2> 

      <Chart/>
      <p>(from https://covidtracking.com/api)</p>
      <h2 >Percent of Infected Healthcare <br/>Workers that are Women</h2>

      <WomenWheel/>
      <p>Source: CDC. 2020. “Characteristics of Health Care Personnel with COVID-19 - United States, February 12-April 9, 2020“. Accessed 4 May 2020.</p>

      <h2></h2>


      <p>https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/racial-ethnic-minorities.html</p>
    </div>
  );
}

export default App;
