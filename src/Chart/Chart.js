
import React, { Component } from "react";
import * as d3 from "d3";
import covid from "../covid.js"

export default class Chart extends Component {

  render(){
    const dataset=[{"positive":1712637,"dateChecked":"2020-05-28T20:00:00Z"},{"positive":1689630,"dateChecked":"2020-05-27T20:00:00Z"},{"positive":1671035, "dateChecked":"2020-05-26T20:00:00Z"}]

   const data=dataset
    
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


    // const line = bounds.append("path")
    //     .attr("d", lineGenerator(dataset))
    //     .attr("fill", "none")
    //     .attr("stroke", "#010172")
    //     .attr("stroke-width", 2)
  
    // 6. Draw peripherals
  
    // const yAxisGenerator = d3.axisLeft()
    //   .scale(yScale)
      
      
  
    // const yAxis = bounds.append("g")
    //   .call(yAxisGenerator)
      
      
  
    // const xAxisGenerator = d3.axisBottom()
    //   .scale(xScale)
  
    // const xAxis = bounds.append("g")
    //   .call(xAxisGenerator)
    //     .style("transform", `translateY(${
    //       dimensions.boundedHeight
    //     }px)`)
    console.log(lineGenerator(dataset))

  const ylabel="Number of Cases"
  const xlabel="Date"
  return (
    <div id="wrapper">
        <svg  width={dimensions.width} height={dimensions.height} style={{border: 'solid 2px black'}}>

      <g transform={`translate(0, ${dimensions.boundedHeight})`}><line
        className="Axis__x__line" 
        x2={dimensions.boundedWidth}
      />
      <text transform={`translate(${dimensions.boundedWidth / 2},40)`}>{xlabel}</text>
   
      </g>

      <g ><line 
        className="Axis__y__line"
        y2={dimensions.boundedHeight}
       
      />
      <text style={{
            transform: `translate(20px, ${dimensions.boundedHeight / 1.5}px) rotate(-90deg)`
          }}> {ylabel}</text>
      </g>


          <g style={{transform:`translate(${dimensions.margin.left}px, ${dimensions.margin.top}px)`}}>
          <rect x={0} y={numberOfCases} width={dimensions.boundedWidth} height={dimensions.boundedHeight} fill= {"#eeee"}/>
          </g>
          <path  data={data} d={lineGenerator(data)}  fill={"none"} stroke={"#E6E831"} strokeWidth={2}/>
        </svg>
   </div>
  );
  }
}

