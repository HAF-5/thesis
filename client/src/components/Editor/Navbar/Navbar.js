import React, { Component } from "react";
import { connect } from "react-redux";
import { toast } from 'react-toastify';

import { editElement } from "./../../../store/actions/elements";
import { selectPage } from "./../../../store/actions/pages";
import {
  removeFromLastTenSteps,
  addToLastTenSteps
} from "./../../../store/actions/lastTenSteps";

import "./../Navbar/Navbar.css";

const fonts = [
    'McLaren', 'cursive', 'Montserrat', 'sans-serif', 'Source Sans Pro', 'sans-serif', 
    'Raleway', 'ZCOOL XiaoWei', 'ZCOOL KuaiLe', 'Open Sans Condensed', 'Playfair Display', 
    'Muli','Rubik', 'Noto Serif', 'Changa', 'Quicksand', 'PT Sans Narrow', 'arial'];

class FixedNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textAlign: "",
      fontWeight: "normal",
      fontStyle: "normal",
      fontSize:
        this.props.elementProperties &&
        parseInt(this.props.elementProperties.fontSize),
      websiteTitle: '',
      fontFamily: 'arial',
      color: '#000'
    };
  }
  changeStyle = (element, style) => {
    let domElement = document.getElementById(element._id);
    let stringHTMLB = domElement.outerHTML;
    this.props.addToLastTenSteps({ _id: element._id, element: stringHTMLB });
    for (let key in style) {
      domElement.style[key] = style[key];
    }
    let stringHTML = domElement.outerHTML;
    this.props.editElement({ _id: element._id, element: stringHTML });
  };
  onClickCenter = e => {
    let textCenter = "center";
    this.changeStyle(this.props.element, { textAlign: textCenter });
  };
  onClickRight = e => {
    let textRight = "right";
    this.changeStyle(this.props.element, { textAlign: textRight });
  };
  onClickLeft = e => {
    let textLeft = "left";
    this.changeStyle(this.props.element, { textAlign: textLeft });
  };
  onClickBold = e => {
    if (this.state.fontWeight === "normal") {
      this.setState(() => ({ fontWeight: "bold" }));
      this.changeStyle(this.props.element, {
        fontWeight: this.state.fontWeight
      });
    } else {
      this.setState(() => ({ fontWeight: "normal" }));
      this.changeStyle(this.props.element, {
        fontWeight: this.state.fontWeight
      });
    }
  };

  onClickItalic = e => {
    if (this.state.fontStyle === "normal") {
      this.setState(() => ({ fontStyle: "italic" }));
      let styleFont = this.state.fontStyle;
      this.changeStyle(this.props.element, {
        fontStyle: styleFont
      });
    } else {
      this.setState(() => ({ fontStyle: "normal" }));
      let styleFont = this.state.fontStyle;

      this.changeStyle(this.props.element, {
        fontStyle: styleFont
      });
    }
  };
  onChangeSizeList = e => {
    let fontSize = e.target.value;
    this.setState(() => ({ fontSize }));
    this.changeStyle(this.props.element, { fontSize: `${fontSize}px` });
  };
  onChangeFontFamily = e => {
    let fontFamily = e.target.value;
    this.setState(() => ({ fontFamily }));
    this.changeStyle(this.props.element, { fontFamily: `${fontFamily}` });
  };
  onColorChangeHandler = e => {
    let color = e.target.value;
    this.setState(() => ({ color }));
    this.changeStyle(this.props.element, {color})
  };

  static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.website!==prevState.website){
      return { websiteTitle: nextProps.website.title};
   }
   else return null;
 }

  render() {
    const fontSize = [
      8,
      9,
      10,
      11,
      12,
      14,
      16,
      18,
      20,
      22,
      24,
      26,
      28,
      36,
      48,
      72
    ];

    return (
      <nav  className="editor-navbar navbar navbar-expand-lg navbar-light bg-light">
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
              <a className="nav-link editor-nav-link" href= {`http://localhost:5000/${this.state.websiteTitle}/${this.props.selectedPage.title}`}>
                Preview
              </a>
            </li>
            <li className="editor-nav-item nav-item">
              <button className="nav-link editor-nav-link"
                    onClick= {() => {
                        toast.success(`Website ${this.state.websiteTitle}, Published Successfuly`);
                        setTimeout(() => {
                            window.location.replace(`http://localhost:5000/${this.state.websiteTitle}/${this.props.selectedPage.title}`)
                        }, 8000);
                    }}>
                Publish
              </button>
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
              <div style= {{zIndex: '9900'}} className="dropdown-menu" aria-labelledby="navbarDropdown">
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
                      <select value= {this.state.fontFamily} onChange= {this.onChangeFontFamily} >
                          {
                            fonts.map((font) => (
                                <option value= {font}>{font}</option>
                            ))
                          }
                      </select>
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
                  <select
                    className="element-style"
                    disabled={!this.props.element}
                    id="size-list"
                    onChange={this.onChangeSizeList}
                  >
                    {fontSize.map(size => {
                      return (
                        <option value={size} style={{ fontSize: "16px" }}>
                          {size}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div  className="btn-group mr-2">
                  <input type="color" value= {this.state.color} onChange= {this.onColorChangeHandler}/>
                </div>
                {/* ///////////////////////// */}

                <div className="btn-group mr-2">
                  <button
                    type="button"
                    className="btn btn-css"
                    onClick={this.onClickBold}
                    disabled={!this.props.element}
                  >
                    <i className="fa fa-bold"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-css"
                    onClick={this.onClickItalic}
                    disabled={!this.props.element}
                  >
                    <i className="fa fa-italic"></i>
                  </button>
                </div>
                <div className="btn-group mr-2">
                  <button
                    type="button"
                    className="btn btn btn-css"
                    onClick={this.onClickLeft}
                    disabled={!this.props.element}
                  >
                    <i className="fa fa-align-left"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn btn-css"
                    onClick={this.onClickCenter}
                    disabled={!this.props.element}
                  >
                    <i className="fa fa-align-center"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn btn-css"
                    onClick={this.onClickRight}
                    disabled={!this.props.element}
                  >
                    <i className="fa fa-align-right"></i>
                  </button>
                </div>

                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-css"
                    disabled={this.props.lastTenSteps}
                    onClick={() => {
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

const mapStateToProps = state => ({
  pages: state.pages,
  lastTenSteps: state.lastTenSteps.length === 0,
  lastStep: state.lastTenSteps[state.lastTenSteps.length - 1],
  selectedPage: state.selectedPage
});

const mapDispatchToProps = dispatch => ({
  selectPage: page => dispatch(selectPage(page)),
  removeFromLastTenSteps: lastStep =>
    dispatch(removeFromLastTenSteps(lastStep)),
  editElement: element => dispatch(editElement(element)),
  addToLastTenSteps: element => dispatch(addToLastTenSteps(element))
});

export default connect(mapStateToProps, mapDispatchToProps)(FixedNavbar);
