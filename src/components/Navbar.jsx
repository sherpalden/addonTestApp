import React, { Component } from "react";


export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar">
          <div className="mainNav">
            <div className="nav-header">
              <span
              className="abcCompany"
              >
              ABC Company
              </span>
            </div>
            <ul
              className="nav-Links"
            >
              <li className="navItem">
                Download
              </li>
              <li className="navItem">
                Guide
              </li>
              <li className="navItem">
                Notice
              </li>
              <li className="navItem">
                Help
              </li>
              <button className="loginButton navItem"
                >login
              </button>
            </ul>
          </div>
        <hr />
        </nav>
      </>
    );
  }
}
