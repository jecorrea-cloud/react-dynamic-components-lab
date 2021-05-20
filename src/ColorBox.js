import React, { Component } from 'react';

export default class ColorBox extends Component{
 
    state = {
      todos: [
      ]
    }
  

  render() {
    let opacityLvl = this.props.opacity
    return(
      <div className={"color-box"} style={{opacity: this.props.opacity }}>
        
        {
          return (opacityLvl >= 0.2) ? <div className={"color-box"} style={{opacity: this.props.opacity }}></div> : null 
        }
      </div>
    )
  }

}

