import React, { Component } from "react"

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-section">
          csNotes v1.0
          <ul>
            <li>
              <a href="https://github.com/sit-csnotes">View us on GitHub</a>
            </li>
            <li>
              <a href="https://stevens.edu">Stevens Institute of Technology</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">Made with ❤️ in Hoboken.</div>
      </footer>
    )
  }
}
