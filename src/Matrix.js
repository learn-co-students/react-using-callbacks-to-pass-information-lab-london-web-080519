import React, { Component } from "react";
import chromeBoi from "./data.js";
import Cell from "./Cell.js";
import ColorSelector from "./ColorSelector.js";
import { maxHeaderSize } from "http";

export default class Matrix extends Component {
  constructor() {
    super();
    this.state = {
      selectedColor: ""
    };
  }

  genRow = vals => vals.map((val, idx) => <Cell key={idx} color={val} getColor={this.getColor}/>);

  genMatrix = () =>
    this.props.values.map((rowVals, idx) => (
      <div key={idx} className="row">
        {this.genRow(rowVals)}
      </div>
    ));

  updateColor = hexColor => {
    this.setState({
      selectedColor: hexColor
    });
  };

  getColor = () => {
    return this.state.selectedColor
  }

  render() {
    return (
      <div id="app">
        <ColorSelector setColor={this.updateColor}/>
        <div id="matrix">{this.genMatrix()}</div>
        {/* <Cell getColor={this.getColor}/> */}
      </div>
    );
  }
}

Matrix.defaultProps = {
  values: chromeBoi
};
