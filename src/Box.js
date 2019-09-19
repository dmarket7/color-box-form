import React, { Component } from "react";

class Box extends Component {
  render() {
    let { width, height, backgroundColor, id } = this.props.boxInfo;


    return (
      <div style={{ width: `${width}px`, height: `${height}px`, backgroundColor }}>
        <button id={id} onClick={() => this.props.remove(id)}>X</button>
      </div>
    )
  }

}

export default Box;