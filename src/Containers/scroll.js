import React, { Component } from 'react'

class Scroll extends Component {
  render(){
    return (
      <div
        style={{
          overflow: "scroll",
          height: "80vh",
          border: "10px solid rgba(0, 0, 0, 0.2)"
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Scroll;