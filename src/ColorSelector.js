import React, { Component } from 'react';
// import Matrix from './Matrix.js'

export default class ColorSelector extends Component {
  
  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      return <div key={idx} onClick={event => this.handleClick(str)} className="color-swatch" style={{backgroundColor: str}}/>
    })
  )

    // handleClick=(e)=>{
    //   console.log(e.target.style.backgroundColor)
    //   // changeColor(e)
    // }

    handleClick=(color)=>{
      // console.log(color)
      this.props.settingColor(color)
    }
  
  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }
  
}
