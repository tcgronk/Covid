
import React, { Component } from "react";
import Chart from './Chart/Chart'
import WomenWheel from './WomenWheel';
import Income from './Income'
export default class Data extends Component {

    
  render(){

  return (
    <div className='Data'>
      <h2>Covid Cases by Day </h2> 
<h3>As the number of cases in the U.S. rises, minorities and women are disproportionately impacted.</h3>
<Chart/>
<p>(from https://covidtracking.com/api)</p>
<h2 >Percent of Infected Healthcare <br/>Workers that are Women</h2>
<h3>People that identify as women make up majority of health care workers in the U.S.</h3>

<WomenWheel/>
<p>Source: CDC. 2020. “Characteristics of Health Care Personnel with COVID-19 - United States, February 12-April 9, 2020“. Accessed 4 May 2020.</p>

<h2></h2>


<p>https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/racial-ethnic-minorities.html</p>

<h2>Women's Income</h2>

        <h3>
        According to a UN study, "There are 740 million women working in the
          informal economy. During the first month of the COVID-19 pandemic,
          their income fell by: 
        </h3>

  
  <Income/>
   </div>
  );
  }
}

