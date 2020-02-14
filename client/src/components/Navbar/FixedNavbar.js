import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/user';
import './FixedNavbar.css';

class FixedNavbar extends Component {

    render() {
        return (
            <div className="header Navar">
                <nav className="navbar navbar-expand-lg navbar-ligth fixed-nav">
                    <h5 className="my-0 mr-md-auto font-weight-normal">H A F 5</h5>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/sites" className="nav-link" href="#">My Sites </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/dashboard/edit-website" className="nav-link" href="#">Dashboard </Link>
                            </li>
                            <span className="bord"></span>
                            <li className="nav-item user-info">
                                <img src={this.props.user.image} className="rounded-circle" ></img>
                                <div className="dropdown">
                                    <span className="btn dropdown-toggle nav-link" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: "#007bff", fontSize: "inherit" }}>
                                        {this.props.user.name}
                                    </span>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <div className="dropdown-item"
                                        > <Link to="/dashboard/profile" style={{ textDecoration: "none", color: "black" }}>Settings</Link>
                                        </div>
                                        <div className="dropdown-item"
                                            onClick={this.props.logout}
                                        >Logout</div>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>

        )
    }
}

const mapStateToProps = (state, props) => ({
    user: state.user
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(FixedNavbar);
