import React, { Component } from "react"
import "./ArticlePage.css"
import CommentSection from "./CommentSection"
import Toast from './Toast'
import Tag from './Tag'

export default class ArticlePage extends Component {
  state = {
    loaded: false
  }
  componentWillMount() {

  }
  render() {
    if(!this.state.loaded) {
      return (
        <main>
          <span>loading lol</span>
        </main>
      )
    }
    return (
      <>
        <h1>{this.props.match.params.name}</h1>
        <div class="author">By @{this.props.match.params.username}</div>
        <div class="tags">
          <Tag name="javascript" />
          <Tag name="debugging" />
        </div>
        {/* <Toast>
          ‼️ This page is simply HTML/CSS (a frontend template), and is not yet
          activated with live information; it is a sample.
        </Toast> */}
        <main>
          <section>
            <div class="content-section">
              <p>
                This is a sample article - if you clicked on one from the search
                page it obviously isn't going to be the correct one, since this
                page isn't dynamic yet. So there's not much to say here –– but I
                will say that debugging JavaScript is very hard. Take this
                code-block:
              </p>
              <pre>
                $
                {`function abc(num) { 
                                return num + 1
                              }`}
              </pre>
              <p>
                You might think: Oh, this will break if I try to pass in a word
                right?
              </p>
              <p>
                Nope. Let's put in "hello" It will return <code>hello1</code>.
                No typechecking (unless you want to transpile), fun! We haven't
                even gotten into scoping <code>this.</code>
              </p>
              <h3>Better than Python</h3>
              <p>
                Let's be honest though. It's better than Python - which is great
                for writing short scripts. But have you ever tried to package up
                a Python project without <a href="https://docker.com">Docker</a>
                ? Piping <code>requirements.txt</code> into pip? What kind of
                package management is that? And don't get me started on the
                whole version2/version3 thing.{" "}
              </p>
            </div>
          </section>
          <section>
            <h2>Comments</h2>
            <CommentSection />
          </section>
        </main>
      </>
    )
  }
}
