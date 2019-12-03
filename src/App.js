import React, { Component } from "react"
import logo from "./logo.svg"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import HomePage from "./features/home/HomePage"
import PostPage from "./features/post/PostPage"
import ArticlePage from "./features/article/ArticlePage"
import "./App.css"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <div className="main-page">
            <Switch>
              <Route path="/post">
                <PostPage />
              </Route>
              <Route
                path="/article/:username/:name"
                component={props => (
                  <ArticlePage
                    postMetaStore={this.props.store.postMetaStore}
                    {...props}
                  />
                )}
              />
              <Route path="/">
                <HomePage postMetaStore={this.props.store.postMetaStore} />
              </Route>
            </Switch>
            <Footer />
          </div>
        </div>
      </Router>
    )
  }
}
