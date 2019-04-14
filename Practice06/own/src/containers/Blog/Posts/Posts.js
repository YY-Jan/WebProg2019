import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Posts extends Component {
    render() {
        const postIDs = [...Array(3).keys()].map(e => e.toString());
        const lists = postIDs.map((i, index) => (
            <li key={index}>
                <NavLink to={"/posts/" + i}>Posts #{i}</NavLink>
            </li>
        ));
        return (
            <div>
                <ul>
                {lists}
              </ul>
            </div>
        );
    }
}
