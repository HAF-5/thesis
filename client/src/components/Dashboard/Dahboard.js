import React, { Component } from "react";
import "./dashboard.css";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { logout } from '../../store/actions/user';

class Dahboard extends Component {
  render() {
    return (
      <div className="sideBar_nav_continer">
        <input type="checkbox" id="check" checked />
        <div className="sidebar_dev_continar">
          <div className="sidebar_Header">
            <h1 className="sidebar_Header_h1">
              Settings
              <br />
              <br />
              <span className="sidebar_Header_p_setUp">{this.props.user.name}</span>
            </h1>
          </div>
          <ul className="sidebar_ul">
            <li className="sidebar_ul_li">
              <Link to="/dashboard/profile" className="sidebar_herf">
                <i className="fas fa-qrcode"></i>Profile
                  </Link>
            </li>
            <li className="sidebar_ul_li">
              <Link to="/dashboard/edit-website" className="sidebar_herf">
                <i className="fas fa-stream"></i>Websites
                </Link>
            </li>
            <li className="sidebar_ul_li">
              <a className="sidebar_herf" href="#">
                <i className="far fa-envelope"></i>Contact
                </a>
            </li>
            <li className="sidebar_ul_li">
              <a className="sidebar_herf" href="#">
                <i className="far fa-question-circle"></i>About
                </a>
            </li>
            <li className="sidebar_ul_li">
              <a className="sidebar_herf" href="#" onClick={this.props.logout}>
                <i className="fas fa-sign-out-alt"></i>Logout
                </a>
            </li>
          </ul>

          <div className="sidebar_footer">
            <div className="sidebar_footer-btn_border">
              <Link
                to="/sites"
                className="btn btn-default  btn-lg btn-Upgrad-footer"
              >
                Back
                </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state, props) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dahboard);
