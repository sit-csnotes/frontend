import React, { Component } from "react"
import Link from "react-router-dom"

export default class Comment extends Component {
  render() {
    return (
      <>
          <div class="comment">
            {/* <span class="comment-upvote-downvote">
              <button>⇡</button>
              <button>⇣</button>
            </span> */}
            <span class="comment-content-area">
              <small>@justinoboyle / 3 min ago</small>
              <span>This is a top-level comment.</span>
              <small class="comment-actions">
                <button>Reply</button>
                <button>Report</button>
              </small>
            </span>
          </div>
      </>
    )
  }
}
