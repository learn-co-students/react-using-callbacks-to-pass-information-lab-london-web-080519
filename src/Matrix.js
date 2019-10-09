import React, { Component } from "react";
import chromeBoi from "./data.js";
import Cell from "./Cell.js";
import ColorSelector from "./ColorSelector.js";

// set default state of matrix so that no color is selected 
export default class Matrix extends Component {
  constructor() {
    super();
    this.state = {
      selectedColor: ""
    };
  }

  //define how we change color
  changeColor = color => {
  //create state in which color resides
    this.setState(
      {
        selectedColor: color
      },
      () => (this.state.selectedColor)
    );
  };
//set highlighted color variable
  highlightedColor = () => {
    return this.state.selectedColor;
  };
  //get selected color from color selector

  //send selected color to cell

  //add a colorSelect attribute so that the matrix knows whichcolor has been returned by the color selector
  genRow = vals => vals.map((val, idx) => <Cell key={idx} color={val} colorSelect={this.highlightedColor}  />);

  genMatrix = () =>
    this.props.values.map((rowVals, idx) => (
      <div key={idx} className="row">
        {this.genRow(rowVals)}
      </div>
    ));

    
  render() {
    return (
      <div id="app">
        <ColorSelector settingColor = {this.changeColor}/>
        <div id="matrix">{this.genMatrix()}</div>
      </div>
    );
  }
}

Matrix.defaultProps = {
  values: chromeBoi
};
