import React, { Component } from "react"
import "./Jumbotron.css"

export default class Jumbotron extends Component {
  static defaultProps = {
    extraClass: "",
  }
  render() {
    return (
      <div className={`jumbotron ${this.props.extraClass}`}>
        <div className="jumbotron-content">{this.props.children}</div>
      </div>
    )
  }
}
