import React, { Component } from "react"
import Link from "react-router-dom"

export default class CommentThread extends Component {
  render() {
    return (
      <>
          <div class="comment-thread">
              {this.props.children}
          </div>
      </>
    )
  }
}
