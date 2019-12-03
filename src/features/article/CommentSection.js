import React, { Component } from "react"
import Link from "react-router-dom"
import CommentThread from './CommentThread'
import './CommentSection.css'

export default class CommentSection extends Component {
  render() {
    return (
      <>
        <CommentThread>
          <div class="comment">
            <span class="comment-upvote-downvote">
              <button>⇡</button>
              <button>⇣</button>
            </span>
            <span class="comment-content-area">
              <small>@justinoboyle / 3 min ago</small>
              <span>Posted this article at 3:34.</span>
              <small class="comment-actions">
                <button>Reply</button>
                {/* <button>Report</button> */}
              </small>
            </span>
          </div>
        </CommentThread>
      </>
    )
  }
}
