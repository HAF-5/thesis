import React, { Component } from "react";
import { connect } from "react-redux";

import { selectPage } from './../../../store/actions/pages';
import { removeFromLastTenSteps } from './../../../store/actions/lastTenSteps';

import "./../Navbar/Navbar.css";

class FixedNavbar extends Component {
  render() {
    const fontSize = [ 8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72 ];
    return (
      <nav className="editor-navbar navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav menu">
            <li className="editor-nav-item nav-item">
              <a className="nav-link editor-nav-link" onClick={this.props.save}>
                Save
              </a>
            </li>
            <li className="editor-nav-item nav-item">
              <a className="nav-link editor-nav-link" href="#">
                Undo
              </a>
            </li>
            <li className="editor-nav-item nav-item">
              <a className="nav-link editor-nav-link" href="#">
                Preview
              </a>
            </li>
            <li className="editor-nav-item nav-item">
              <a className="nav-link editor-nav-link" href="#">
                Publish
              </a>
            </li>
            <li className="editor-nav-item nav-item dropdown">
              <a
                href="#"
                className="nav-link editor-nav-link dropdown-toggle"
                id="navbarDropdown"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Pages
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {this.props.pages.map(page => (
                  <button
                    className="dropdown-item"
                    onClick={() => {
                      this.props.selectPage(page);
                    }}
                  >
                    {" "}
                    {page.title}{" "}
                  </button>
                ))}
                <button
                  className="dropdown-item"
                  onClick={this.props.openAddPageModal}
                >
                  <i class="fas fa-plus"></i> Add Page
                </button>
              </div>
            </li>
            <li className="editor-nav-item nav-item">
              <div style={{ position: "relative", left: "300px" }}>
                {/* ///////////////////////////////////// */}
                <div className="btn-group mr-2">
                  <div className="dropdown">
                    <button
                      type="button"
                      className="btn btn-css dropdown-toggle"
                      id="dropdownMenuMenu"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fa fa-font"></i>
                    </button>
                    <div
                      className="dropdown-menu "
                      aria-labelledby="dropdownMenuMenu"
                    >
                      <p className="dropdown-item " type="button">
                        8
                      </p>
                    </div>
                  </div>
                </div>
                {/* //////////////////////////////////////// */}

                <div className="btn-group mr-2">
                  <select className="element-style">
                    {fontSize.map(size => {
                      return (
                        <option value={size} style={{ fontSize: "16px" }}>
                          {size}
                        </option>
                      );
                    })}
                  </select>
                </div>
                {/* ///////////////////////// */}

                <div className="btn-group mr-2">
                  <button type="button" className="btn btn-css">
                    <i className="fa fa-bold"></i>
                  </button>
                  <button type="button" className="btn btn-css">
                    <i className="fa fa-italic"></i>
                  </button>
                </div>
                <div className="btn-group mr-2">
                  <button type="button" className="btn btn btn-css">
                    <i className="fa fa-align-left"></i>
                  </button>
                  <button type="button" className="btn btn btn-css">
                    <i className="fa fa-align-center"></i>
                  </button>
                  <button type="button" className="btn btn btn-css">
                    <i className="fa fa-align-right"></i>
                  </button>
                </div>

                <div className="btn-group">
                    <button 
                        type="button" className="btn btn-css"
                        disabled= {this.props.lastTenSteps} 
                        onClick= {() => {
                            this.props.removeFromLastTenSteps(this.props.lastStep);
                        }}
                    >
                        <i className="fa fa-undo"></i>
                    </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
    pages: state.pages,
    lastTenSteps: state.lastTenSteps.length === 0,
    lastStep: state.lastTenSteps[state.lastTenSteps.length - 1]
});

const mapDispatchToProps = (dispatch) => ({
    selectPage: (page) => dispatch(selectPage(page)),
    removeFromLastTenSteps: (lastStep) => dispatch(removeFromLastTenSteps(lastStep))
});

export default connect(mapStateToProps, mapDispatchToProps)(FixedNavbar);
