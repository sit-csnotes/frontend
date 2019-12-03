import React, { Component } from "react"
import "./Tag.css"

export default class Tag extends Component {
  render() {
    return (
        <span className={`tag tag-${this.props.name}`}>{this.props.name}</span>
    )
  }
}
