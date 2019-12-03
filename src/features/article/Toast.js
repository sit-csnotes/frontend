import React, { Component } from "react"
import "./Toast.css"

export default class Toast extends Component {
  state = {
    display: true,
  }
  render() {
    if (!this.state.display) return <></>
    return (
      <div className="toast">
        <span>{this.props.children}</span>
        <button
          onClick={() => this.setState({ display: false })}
          className="close-button"
        >
          X
        </button>
      </div>
    )
  }
}
