import React, { Component } from "react";
import * as d3 from "d3";

export default class Chart extends Component {


    
  render(){
    const data =  d3.json("./covid.json")
      
    const yAccessor = d => d.positive
    const dateParser = d3.utcParse("%Y-%m-%dT%H:%M:%S%Z")
    const xAccessor = d => dateParser(d.dateChecked)
    let dimensions = {
      width: window.innerWidth * 0.9,
      height: 400,
      margin: {
        top: 15,
        right: 15,
        bottom: 40,
        left: 60,
      },
    }
    dimensions.boundedWidth = dimensions.width
      - dimensions.margin.left
      - dimensions.margin.right
    dimensions.boundedHeight = dimensions.height
      - dimensions.margin.top
      - dimensions.margin.bottom
    
    
      const wrapper = d3.select("#wrapper")
      .append("svg")
        .attr("width", dimensions.width)
        .attr("height", dimensions.height)
  
    const bounds = wrapper.append("g")
        .style("transform", `translate(${
          dimensions.margin.left
        }px, ${
          dimensions.margin.top
        }px)`)
  
  
      const yScale = d3.scaleLinear()
      .domain(d3.extent(data, yAccessor))
      .range([dimensions.boundedHeight, 0])
  
    const numberOfCases = yScale(32)
    const covidCases = bounds.append("rect")
        .attr("x", 0)
        .attr("width", dimensions.boundedWidth)
        .attr("y", numberOfCases)
        .attr("height", dimensions.boundedHeight)
        .attr("fill", "#e0f3f3")
  
        
  
    const xScale = d3.scaleTime()
      .domain(d3.extent(data, xAccessor))
      .range([0, dimensions.boundedWidth])
  

  
    // 6. Draw peripherals
  
    const yAxisGenerator = d3.axisLeft()
      .scale(yScale)
      
      
  
    const yAxis = bounds.append("g")
      .call(yAxisGenerator)
      
      
  
    const xAxisGenerator = d3.axisBottom()
      .scale(xScale)
  
    const xAxis = bounds.append("g")
      .call(xAxisGenerator)
        .style("transform", `translateY(${
          dimensions.boundedHeight
        }px)`)
        const lineGenerator = d3.line()
        .x(d => xScale(xAccessor(d)))
        .y(d => yScale(yAccessor(d)))
  
  return (
    <div id="wrapper">

      <svg className="Chart" 
  width={dimensions.width/2}
  height={dimensions.height/2} >
   
    </svg>
    <path
      className='Line' 
      d={lineGenerator(data)}
    />
    <g className="Axis AxisVertical">
      <line
        className="Axis__line"
        y2={200}
      /></g>
          <g className="Axis AxisHorizontal">
      <line
        className="Axis__line"
        y2={400}
      /></g>
    </div>
  );
  }
}
