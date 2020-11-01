import React, { Component } from 'react'

class Scroll extends Component {
  render(){
    return (
      <div
        style={{
          overflow: "scroll",
          height: "80vh"
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Scroll;