import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import fire from "../Fire.js";


class Navigation extends Component {

  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    fire.auth().signOut();
  }
  render() {
  return (
    <div>
    <nav className="headerStyle">
          <ul>
          <NavLink to="/MainPage">Home</NavLink>
          <NavLink to="/Upload">Upload</NavLink>
          <NavLink to="/" onClick={this.logout}>Log Out</NavLink>
          </ul>
    </nav>
   </div>
 )};
};


export default Navigation;
