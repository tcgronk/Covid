
import React, { Component } from "react";


export default class Help extends Component {

    
  render(){

  return (
    <div>
       <p>Protect yourself & your community through education and information sharing:</p>
         <div className="list">
         <h2><a href='https://www.unwomen.org/en' alt='un-information' target='_blank'>
  {" "}1 UN Women
            </a> </h2> 
           <h2><a href='https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public'alt='who-information' target='_blank'>
  {" "}2 WHO
            </a> </h2> 
            <h2><a href='https://www.cdc.gov/coronavirus/'alt='cdc-information' target='_blank'>
  {" "}3 CDC
            </a> </h2> 

            </div>
   </div>
  );
  }
}

