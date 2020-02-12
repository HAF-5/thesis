import React, { Component } from "react";
import { connect } from 'react-redux';

import { editElement } from './../../store/actions/elements';

import "./toolbox.css";
class Toolbox extends Component {

  changeStyle = (element, style) => {
    let domElement = document.getElementById(element._id);
    for(let key in style){
      domElement.style[key] = style[key];
    }
    let stringHTML = domElement.outerHTML;
    this.props.editElement({ _id: element._id, element: stringHTML });
    // console.log(stringHTML, style)
  }

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
              <li
                onClick= {() => this.changeStyle(this.props.element, {color: 'yellow'})}
              >
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

const mapDispatchToProps = (dispatch) => ({
  editElement: (element) => dispatch(editElement(element))
})
export default connect(null, mapDispatchToProps)(Toolbox);