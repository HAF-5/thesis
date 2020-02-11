import React, { Component } from "react";
import "./toolbox.css";
export default class Toolbox extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="sidebar">
          <ul>
            <div className="position-flex">
              <li>
                <a href="#">
                  {" "}
                  <i className="fas fa-copy"> </i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-paste"></i>
                </a>
              </li>
            </div>
            <div className="position-flex">
              <li>
                <a href="#">
                  {" "}
                  <i className="fas fa-home"> </i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-trash-alt"></i>
                </a>
              </li>
            </div>
            <li>
              <a href="#">
                {" "}
                <i className="fas fa-user"> </i>
              </a>
            </li>
            <li>
              <a href="#">
                {" "}
                <i className="fas fa-address-card"> </i>
              </a>
            </li>
            <li>
              <a href="#">
                {" "}
                <i className="fas fa-project-diagram"> </i>
              </a>
            </li>
            <li>
              <a href="#">
                {" "}
                <i className="fas fa-blog"> </i>
              </a>
            </li>
            <li>
              <a href="#">
                {" "}
                <i className="fas fa-address-book"> </i>
              </a>
            </li>
            <li>
              <a href="#">
                {" "}
                <i className="fas fa-map-pin"> </i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
