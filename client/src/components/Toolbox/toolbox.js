import React, { Component } from "react";
import { connect } from "react-redux";

import { editElement } from "./../../store/actions/elements";

import "./toolbox.css";
class Toolbox extends Component {
  changeStyle = (element, style) => {
    let domElement = document.getElementById(element._id);
    for (let key in style) {
      domElement.style[key] = style[key];
    }
    let stringHTML = domElement.outerHTML;
    this.props.editElement({ _id: element._id, element: stringHTML });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="sidebar">
          <div className="henry">
            <ul className="myUl">
              <div className="position-flex">
                <li className="myLi">
                  <a className="myA" href="#">
                    {" "}
                    <i className="fas fa-copy"> </i>
                  </a>
                </li>
                <li className="myLi">
                  <a className="myA" href="#">
                    <i className="fas fa-paste"></i>
                  </a>
                </li>

                <li className="myLi">
                  <a className="myA" href="#">
                    <i className="fas fa-trash-alt"></i>
                  </a>
                </li>
              </div>
              <li className=" myLi">
                <label className="input-number-label">color</label>
                <input type="color" />
              </li>
              <div className="width-hieght">
                <div>
                  <li className="position-flex myLi">
                    <label className="input-number-label">W:</label>
                    <input
                      className=" number-inptw"
                      type="number"
                      placeholder="0"
                    />
                    <label className="input-number-label">H:</label>
                    <input
                      className=" number-inptw"
                      type="number"
                      placeholder="0"
                    />
                  </li>
                </div>
                <li
                  className="position-flex myLi"
                  style={{ position: "relative", top: "30px" }}
                >
                  <label
                    style={{
                      position: "relative",
                      right: "-50px",
                      top: "-10px"
                    }}
                  >
                    padding
                  </label>
                  <input
                    className="number-inpt"
                    type="number"
                    placeholder="0"
                    style={{
                      position: "relative",
                      top: "-40px",
                      left: "4px"
                    }}
                  />
                  <input
                    className="number-inpt"
                    type="number"
                    placeholder="0"
                    style={{
                      position: "relative",
                      bottom: "-20px",
                      left: "-26px"
                    }}
                  />
                  <input
                    className="number-inpt"
                    type="number"
                    placeholder="0"
                    style={{
                      position: "relative",
                      top: "-10px"
                    }}
                  />
                  <input
                    className="number-inpt"
                    type="number"
                    placeholder="0"
                    style={{
                      position: "relative",
                      top: "-10px",
                      left: "-140px"
                    }}
                  />
                </li>
                <li
                  className="position-flex myLi"
                  style={{ position: "relative", top: "70px" }}
                >
                  <label
                    style={{
                      position: "relative",
                      right: "-55px",
                      top: "-10px"
                    }}
                  >
                    margin
                  </label>
                  <input
                    className="number-inpt"
                    type="number"
                    placeholder="0"
                    style={{
                      position: "relative",
                      top: "-40px",
                      left: "12px"
                    }}
                  />
                  <input
                    className="number-inpt"
                    type="number"
                    placeholder="0"
                    style={{
                      position: "relative",
                      bottom: "-20px",
                      left: "-18px"
                    }}
                  />
                  <input
                    className="number-inpt"
                    type="number"
                    placeholder="0"
                    style={{
                      position: "relative",
                      top: "-10px",
                      right: "-6px"
                    }}
                  />
                  <input
                    className="number-inpt"
                    type="number"
                    placeholder="0"
                    style={{
                      position: "relative",
                      top: "-10px",
                      left: "-130px"
                    }}
                  />
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  editElement: element => dispatch(editElement(element))
});
export default connect(null, mapDispatchToProps)(Toolbox);
