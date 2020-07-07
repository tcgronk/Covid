
import React, { Component } from "react";
import * as d3 from "d3";
import cases from "../covid.js"

export default class Chart extends Component {

  render(){
   const dataset=cases
    
    const yAccessor = d => d.positive
    const dateParser = d3.utcParse("%Y-%m-%dT%H:%M:%S%Z")
    const xAccessor = d => dateParser(d.dateChecked)
    let dimensions = {
      width: 800,
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
        .style("border", "solid 2px black")
  
    const bounds = wrapper.append("g")
        .style("transform", `translate(${
          dimensions.margin.left
        }px, ${
          dimensions.margin.top
        }px)`)
  
  
      const yScale = d3.scaleLinear()
      .domain(d3.extent(dataset, yAccessor))
      .range([dimensions.boundedHeight, 0])
  
    const numberOfCases = yScale(32)
    const covidCases = bounds.append("rect")
        .attr("x", 0)
        .attr("width", dimensions.boundedWidth)
        .attr("y", numberOfCases)
        .attr("height", dimensions.boundedHeight)
        .attr("fill", "#e0f3f3")
  
        
  
    const xScale = d3.scaleTime()
      .domain(d3.extent(dataset, xAccessor))
      .range([0, dimensions.boundedWidth])
  
      const lineGenerator = d3.line()
      .x(d => xScale(xAccessor(d)))
      .y(d => yScale(yAccessor(d)))



  const ylabel="Number of Cases"
  const xlabel="Date"
  return (
    <div id="wrapper">
        <svg  width={dimensions.width} height={dimensions.height} style={{border: 'solid 2px black'}}>

      <g transform={`translate(0, ${dimensions.boundedHeight})`}><line
        className="Axis__x__line" 
        x2={dimensions.boundedWidth}
        stroke={"#000000"} strokeWidth={2}
        style={{
          transform: `translate(30px, 0)`
        }}
      />
      <text transform={`translate(${dimensions.boundedWidth / 2},40)`}>{xlabel}</text>
   
      </g>

      <g ><line 
        className="Axis__y__line"
        y2={dimensions.boundedHeight}
        stroke={"#000000"} strokeWidth={2}
        style={{
          transform: `translate(30px, 0)`
        }}
      />


      <text style={{
            transform: `translate(20px, ${dimensions.boundedHeight / 1.5}px) rotate(-90deg)`
          }}> {ylabel}</text>
      </g>
          <path  data={dataset} d={lineGenerator(dataset)}  fill={"none"} stroke={"#E6E831"} strokeWidth={2}
                  style={{
                    transform: `translate(30px, 0)`
                  }}
          />
        </svg>
   </div>
  );
  }
}

