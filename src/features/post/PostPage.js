import React, { Component } from "react"
import { Link } from "react-router-dom"
import Jumbotron from "../../components/Jumbotron"
import "./PostPage.css"
import ReactMarkdown from 'react-markdown'

export default class PostPage extends Component {
  state = {
      value: '# Write some markdown here'
  }
  handleChange(event) {
    //   console.log(event.target.value || '')
    this.setState({ value: event.target.value || '' })
    localStorage.articleWIP = event.target.value || ''
  }
  render() {
    return (
      <main>
        <section>
          <Jumbotron extraClass={"jumbotron-post"}>
            <h2>Time to write...</h2>
            <h3>
              Need some inspiration? Check out <Link to="/">some other posts.</Link>
            </h3>
          </Jumbotron>
          <div className="editor-area">
            <div className="editor-section">
              <h2>Editor</h2>
              <textarea onChange={this.handleChange.bind(this)} className="new-post-textarea">
                # Write some markdown here
              </textarea>
            </div>
            <div className="editor-section"><h2>Preview</h2><ReactMarkdown source={this.state.value} /></div>
          </div>
          <p className="tos">
            By submitting a post, you abide by the Terms of Service
          </p>
          <button className="submit-new-post">Submit</button>
        </section>
      </main>
    )
  }
}
