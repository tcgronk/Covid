import React, { Component } from "react";
import * as d3 from "d3";

export default class WomenWheel extends Component {

  render() {

    let data=[73,27]
    const height = 200;
    const width = 200;
    let pie = d3.pie()(data);
    let arc = d3.arc().innerRadius(70).outerRadius(100);
    let colors = d3.interpolateRgb("#152950", "#eeee");
    return (
        <svg className="report" >
          <g transform={`translate(${width / 2},${height / 2})`}>
            {pie.map((slice, index) => {
              let sliceColor = colors(index / (pie.length - 1));
              return (
                <g key={slice.data}>
                  <path key={slice.index} d={arc(slice)} fill={sliceColor} />
                  <text textAnchor="middle" x="0" y="0" fill="black">
                    {data[0]}%
                  </text>
                </g>
              );
            })}
          </g>
        </svg>
    );
  }
}
