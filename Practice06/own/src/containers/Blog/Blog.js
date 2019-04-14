import React, { Component } from "react";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";

import Header from './Header';
import Home from './Home';
import Posts from "./Posts/Posts";
import PostRender from "./Posts/PostRender";
import About from './About';

export default class Blog extends Component {
  render() {
    return (
      <div className="content-outer content-inner">
        <Header />
        <div className="main-outer main-inner">
          <div className="column-center">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/posts/:id?" component={PostRender} />
              <Redirect from="/home" to="/" />
              <Route exact path="/authors" component={About} />
            </Switch>
          </div>{/* column-center */}
          <div className="column-right">
            <ul>
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/authors">Authors</NavLink>
              </li>
            </ul>
            <h2>Archive</h2>
            <Posts />
          </div>{/* column-right */}
        </div>
      </div>
    );
  }
}
