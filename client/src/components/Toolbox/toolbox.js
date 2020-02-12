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
  }

  render() {
    return (
      <div className="wrapper">
        <div className="sidebar">
          <ul>
            <div className="position-flex">
                <a href="#">
                  {" "}
                  <i className="fas fa-copy"> </i>
                </a>
                <a href="#">
                  <i className="fas fa-paste"></i>
                </a>
                <a 
                  href="#"
                  onClick= {() => this.changeStyle(this.props.element, {color: 'yellow'})}
                >
                  {" "}
                  <i className="fas fa-home"> </i>
                </a>
                <a href="#">
                  <i className="fas fa-trash-alt"></i>
                </a>
            </div>
            <li className="position-flex">
              <label>color</label>
              <input type= 'color'/>
            </li>
            <li className="position-flex">
              <label>width</label>
              <input className= "number-inpt" type= 'number'/>
              <input className= "number-inpt" type= 'number'/>
              <input className= "number-inpt" type= 'number'/>
              <input className= "number-inpt" type= 'number'/>
            </li>
            <li className="position-flex">
              <label>height</label>
              <input className= "number-inpt" type= 'number'/>
              <input className= "number-inpt" type= 'number'/>
              <input className= "number-inpt" type= 'number'/>
              <input className= "number-inpt" type= 'number'/>
            </li>
            <li className="position-flex">
              <label>padding</label>
              <input className= "number-inpt" type= 'number'/>
              <input className= "number-inpt" type= 'number'/>
              <input className= "number-inpt" type= 'number'/>
              <input className= "number-inpt" type= 'number'/>
            </li>
            <li className="position-flex">
              <label>margin</label>
              <input className= "number-inpt" type= 'number'/>
              <input className= "number-inpt" type= 'number'/>
              <input className= "number-inpt" type= 'number'/>
              <input className= "number-inpt" type= 'number'/>
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