import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { setMenuElementDispatcher } from "./../../store/actions/sideMenu";
import { addElement } from "./../../store/actions/elements";

import { elementsData } from "./../../sideMenuElementsData";

import "./sideMenu.css";

class sideMenu extends Component {
  componentDidMount() {
    console.log(elementsData);
    this.props.setMenuElements(elementsData);
  }

  render() {
    return (
      <div className=" col-md-1 sideMenu">
        <div className=" sidebar">
          <div className="container">
            <ul className="sideList">
              {this.props.menuItems.map(item => (
                <li className="sideMenuTitle">
                  {item.title}

                  <ul className="subMenu">
                    {item.elements.map(element => (
                      <li
                        onClick={() => {
                          this.props.addElement(element);
                        }}
                        dangerouslySetInnerHTML={{
                          __html: element.element
                        }}
                        className=""
                      ></li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  menuItems: state.sideMenuElements
});

const mapDispatchToProps = dispatch => ({
  setMenuElements: payload => dispatch(setMenuElementDispatcher(payload)),
  addElement: payload => dispatch(addElement(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(sideMenu);
