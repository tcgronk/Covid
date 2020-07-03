
import React, { Component } from "react";
import Chart from './Chart/Chart'
import WomenWheel from './WomenWheel';

export default class Data extends Component {

    
  render(){

  return (
    <div>
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
}

