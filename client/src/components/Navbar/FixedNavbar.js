import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/user';
import './FixedNavbar.css';

class FixedNavbar extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       toggleStateA: false
    //     };
    //   }

    //   handleToggleClickA = () => {
    //     this.setState({
    //       toggleStateA: !this.state.toggleStateA
    //     });
    //   };

    render() {
        return (
            <div className="Navar">
                <nav className="navbar navbar-expand-lg navbar-ligth" style={{ height: "60px" }}>
                    <h5 className="my-0 mr-md-auto font-weight-normal">H A F 5</h5>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/dashboard" className="nav-link" href="#">Dashboard </Link>
                            </li>

                            <li className="nav-item">
                                <div className="dropdown">
                                    <button className="btn dropdown-toggle nav-link" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: "#007bff" }}>
                                        {this.props.user.name}
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <div className="dropdown-item"
                                            onClick={this.props.logout}
                                        >Logout</div>
                                    </div>
                                </div>
                            </li>

                            <li className="nav-item">
                                <img src={this.props.user.image} className="rounded-circle" style={{ width: "30px", height: "30px" }}></img>
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
