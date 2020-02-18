import React, { Component } from "react";
import { connect } from "react-redux";

import { editElement, deleteElement } from "./../../store/actions/elements";
import { addToLastTenSteps } from "./../../store/actions/lastTenSteps";

import "./toolbox.css";

class Toolbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width:
        this.props.elementProperties &&
        parseInt(this.props.elementProperties.width),
      height:
        this.props.elementProperties &&
        parseInt(this.props.elementProperties.height),
      // color: this.props.elementProperties && parseInt(this.props.elementProperties.color),
      paddingTop:
        this.props.elementProperties &&
        parseInt(this.props.elementProperties.paddingTop),
      paddingRight:
        this.props.elementProperties &&
        parseInt(this.props.elementProperties.paddingRight),
      paddingBottom:
        this.props.elementProperties &&
        parseInt(this.props.elementProperties.paddingBottom),
      paddingLeft:
        this.props.elementProperties &&
        parseInt(this.props.elementProperties.paddingLeft),
      marginTop:
        this.props.elementProperties &&
        parseInt(this.props.elementProperties.marginTop),
      marginRight:
        this.props.elementProperties &&
        parseInt(this.props.elementProperties.marginRight),
      marginBottom:
        this.props.elementProperties &&
        parseInt(this.props.elementProperties.marginBottom),
      marginLeft:
        this.props.elementProperties &&
        parseInt(this.props.elementProperties.marginLeft),
        background: "#FFF"
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.elementProperties !== this.props.elementProperties) {
      this.setState({
        width: parseInt(this.props.elementProperties.width),
        height: parseInt(this.props.elementProperties.height),
        paddingTop: parseInt(this.props.elementProperties.paddingTop),
        paddingRight: parseInt(this.props.elementProperties.paddingRight),
        paddingBottom: parseInt(this.props.elementProperties.paddingBottom),
        paddingLeft: parseInt(this.props.elementProperties.paddingLeft),
        marginTop: parseInt(this.props.elementProperties.marginTop),
        marginRight: parseInt(this.props.elementProperties.marginRight),
        marginBottom: parseInt(this.props.elementProperties.marginBottom),
        marginLeft: parseInt(this.props.elementProperties.marginLeft),
        positionTop: parseInt(this.props.elementProperties.positionTop),
        positionRight: parseInt(this.props.elementProperties.positionRight),
        positionBottom: parseInt(this.props.elementProperties.positionBottom),
        positionLeft: parseInt(this.props.elementProperties.positionLeft)
      });
    }
  }

  changeStyle = (element, style) => {
    let domElement = document.getElementById(element._id);
    let stringHTMLB = domElement.outerHTML;
    this.props.addToLastTenSteps({_id: element._id, element: stringHTMLB});
    for (let key in style) {
      domElement.style[key] = style[key];
    }
    let stringHTML = domElement.outerHTML;
    this.props.editElement({ _id: element._id, element: stringHTML });
  };

  onWidthChangeHandler = e => {
    let width = e.target.value;
    this.setState(() => ({ width }));
    this.changeStyle(this.props.element, { width: `${width}px` });
  };

  onHeightChangeHandler = e => {
    let height = e.target.value;
    this.setState(() => ({ height }));
    this.changeStyle(this.props.element, { height: `${height}px` });
  };

  onPaddingTopChangeHandler = e => {
    let paddingTop = e.target.value;
    this.setState(() => ({ paddingTop }));
    this.changeStyle(this.props.element, { paddingTop: `${paddingTop}px` });
  };

  onPaddingRightChangeHandler = e => {
    let paddingRight = e.target.value;
    this.setState(() => ({ paddingRight }));
    this.changeStyle(this.props.element, { paddingRight: `${paddingRight}px` });
  };

  onPaddingBottomChangeHandler = e => {
    let paddingBottom = e.target.value;
    this.setState(() => ({ paddingBottom }));
    this.changeStyle(this.props.element, {
      paddingBottom: `${paddingBottom}px`
    });
  };

  onPaddingLeftChangeHandler = e => {
    let paddingLeft = e.target.value;
    this.setState(() => ({ paddingLeft }));
    this.changeStyle(this.props.element, { paddingLeft: `${paddingLeft}px` });
  };

  onMarginTopChangeHandler = e => {
    let marginTop = e.target.value;
    this.setState(() => ({ marginTop }));
    this.changeStyle(this.props.element, { marginTop: `${marginTop}px` });
  };

  onMarginRightChangeHandler = e => {
    let marginRight = e.target.value;
    this.setState(() => ({ marginRight }));
    this.changeStyle(this.props.element, { marginRight: `${marginRight}px` });
  };

  onMarginBottomChangeHandler = e => {
    let marginBottom = e.target.value;
    this.setState(() => ({ marginBottom }));
    this.changeStyle(this.props.element, { marginBottom: `${marginBottom}px` });
  };

  onMarginLeftChangeHandler = e => {
    let marginLeft = e.target.value;
    this.setState(() => ({ marginLeft }));
    this.changeStyle(this.props.element, { marginLeft: `${marginLeft}px` });
  };

  onPositionTopChangeHandler = e => {
    let positionTop = e.target.value;
    this.setState(() => ({ positionTop }));
    this.changeStyle(this.props.element, { top: `${positionTop}px` });
  };

  onPositionRightChangeHandler = e => {
    let positionRight = e.target.value;
    this.setState(() => ({ positionRight }));
    this.changeStyle(this.props.element, { right: `${positionRight}px` });
  };

  onPositionBottomChangeHandler = e => {
    let positionBottom = e.target.value;
    this.setState(() => ({ positionBottom }));
    this.changeStyle(this.props.element, { bottom: `${positionBottom}px` });
  };

  onPositionLeftChangeHandler = e => {
    let positionLeft = e.target.value;
    this.setState(() => ({ positionLeft }));
    this.changeStyle(this.props.element, { left: `${positionLeft}px` });
  };

  onBackgroundColorChangeHandler = e => {
    let background = e.target.value;
    this.setState(() => ({ background }));
    this.changeStyle(this.props.element, {background})
  };

  render() {
    return (
      <div className="wrapper">
        <div className="sidebar">
          <div className="henry">
            <ul className="myUl">
              <div className="position-flex">
                <li className="myLi">
                  <a className="myA">
                    {" "}
                    <i className="fas fa-copy"> </i>
                  </a>
                </li>
                <li className="myLi">
                  <a className="myA">
                    <i className="fas fa-paste"></i>
                  </a>
                </li>

                <li className="myLi">
                  <button className="myA" onClick={(e) => this.props.deleteElement(this.props.element)}>
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </li>
              </div>
              <li
                className=" myLi"
                style={{
                  display: "inline-flex",
                  position: "absolute",
                  left: "20px"
                }}
              >
                <label className="input-number-label">Background</label>
                <input type="color" value= {this.state.background} onChange= {this.onBackgroundColorChangeHandler}/>
              </li>
              <div className="width-hieght">
                <div>
                  <li
                    className="position-flex myLi"
                    style={{ position: "relative", top: "60px" }}
                  >
                    <label className="input-number-label">W:</label>
                    <input
                      className=" number-inptw"
                      type="number"
                      placeholder="0"
                      value={this.state.width}
                      onChange={e => this.onWidthChangeHandler(e)}
                      disabled={!this.props.element}
                    />
                    <label className="input-number-label">H:</label>
                    <input
                      className=" number-inptw"
                      type="number"
                      placeholder="0"
                      disabled={!this.props.element}
                      value={this.state.height}
                      onChange={this.onHeightChangeHandler}
                    />
                  </li>
                </div>
                <li
                  className="position-flex myLi"
                  style={{ position: "relative", top: "90px" }}
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
                    className="number-inpt" //top
                    type="number"
                    placeholder="0"
                    style={{
                      position: "relative",
                      top: "-40px",
                      left: "4px"
                    }}
                    disabled={!this.props.element}
                    value={this.state.paddingTop} // padding top
                    onChange={this.onPaddingTopChangeHandler}
                  />
                  <input
                    className="number-inpt" //bottom
                    type="number"
                    placeholder="0"
                    style={{
                      position: "relative",
                      bottom: "-20px",
                      left: "-26px"
                    }}
                    disabled={!this.props.element}
                    value={this.state.paddingBottom} // padding bottom
                    onChange={this.onPaddingBottomChangeHandler}
                  />
                  <input
                    className="number-inpt" //right
                    type="number"
                    placeholder="0"
                    style={{
                      position: "relative",
                      top: "-10px"
                    }}
                    disabled={!this.props.element}
                    value={this.state.paddingRight} // padding right
                    onChange={this.onPaddingRightChangeHandler}
                  />
                  <input
                    className="number-inpt" //left
                    type="number"
                    placeholder="0"
                    style={{
                      position: "relative",
                      top: "-10px",
                      left: "-140px"
                    }}
                    disabled={!this.props.element}
                    value={this.state.paddingLeft} // padding left
                    onChange={this.onPaddingLeftChangeHandler}
                  />
                </li>
                <li
                  className="position-flex myLi"
                  style={{ position: "relative", top: "125px" }}
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
                    className="number-inpt" //top
                    type="number"
                    placeholder="0"
                    style={{
                      position: "relative",
                      top: "-40px",
                      left: "12px"
                    }}
                    disabled={!this.props.element}
                    value={this.state.marginTop}
                    onChange={this.onMarginTopChangeHandler}
                  />
                  <input
                    className="number-inpt" //bottom
                    type="number"
                    placeholder="0"
                    style={{
                      position: "relative",
                      bottom: "-20px",
                      left: "-18px"
                    }}
                    disabled={!this.props.element}
                    value={this.state.marginBottom}
                    onChange={this.onMarginBottomChangeHandler}
                  />
                  <input
                    className="number-inpt" //right
                    type="number"
                    placeholder="0"
                    style={{
                      position: "relative",
                      top: "-10px",
                      right: "-6px"
                    }}
                    disabled={!this.props.element}
                    value={this.state.marginRight}
                    onChange={this.onMarginRightChangeHandler}
                  />
                  <input
                    className="number-inpt" //left
                    type="number"
                    placeholder="0"
                    style={{
                      position: "relative",
                      top: "-10px",
                      left: "-130px"
                    }}
                    disabled={!this.props.element}
                    value={this.state.marginLeft}
                    onChange={this.onMarginLeftChangeHandler}
                  />
                </li>

                <li
                  className="position-flex"
                  style={{ position: "relative", top: "180px" }}
                >
                  <label
                    style={{
                      position: "relative",
                      right: "-64px",
                      top: "-10px"
                    }}
                  >
                    position
                  </label>
                  <input
                    className="number-inpt"
                    type="number"
                    disabled={!this.props.element}
                    value={this.state.positionTop}
                    onChange={this.onPositionTopChangeHandler}
                    placeholder="0"
                    style={{
                      position: "relative",
                      top: "-40px",
                      left: "20px"
                    }}
                  />
                  <input
                    className="number-inpt"
                    type="number"
                    disabled={!this.props.element}
                    value={this.state.positionRight}
                    onChange={this.onPositionRightChangeHandler}
                    placeholder="0"
                    style={{
                      position: "relative",
                      top: "-10px",
                      right: "-46px"
                    }}
                  />
                  <input
                    className="number-inpt"
                    type="number"
                    disabled={!this.props.element}
                    value={this.state.positionBottom}
                    onChange={this.onPositionBottomChangeHandler}
                    placeholder="0"
                    style={{
                      position: "relative",
                      bottom: "-20px",
                      left: "-39px"
                    }}
                  />
                  <input
                    className="number-inpt"
                    type="number"
                    disabled={!this.props.element}
                    value={this.state.positionLeft}
                    onChange={this.onPositionLeftChangeHandler}
                    placeholder="0"
                    style={{
                      position: "relative",
                      top: "-10px",
                      left: "-122px"
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

const mapStateToProps = (state) => ({
  lastStep: state.lastTenSteps[state.lastTenSteps.length - 1]
})
const mapDispatchToProps = (dispatch, props) => ({
  editElement: element => dispatch(editElement(element)),
  addToLastTenSteps: (element) => dispatch(addToLastTenSteps(element)),
  deleteElement: element => dispatch(deleteElement(element))

});
export default connect(mapStateToProps, mapDispatchToProps)(Toolbox);
