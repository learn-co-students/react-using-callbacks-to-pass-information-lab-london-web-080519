import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
     selectColor : ""
  }}

  setColor = (color) => {
    this.setState(
      { selectColor: color }
    )
    console.log(color)

  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} changeColor={this.changeColorCell}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  changeColorCell = () => {
    return this.state.selectColor 
  }


  render() {
    return (
      <div id="app">
        <ColorSelector settingColor={this.setColor} />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
