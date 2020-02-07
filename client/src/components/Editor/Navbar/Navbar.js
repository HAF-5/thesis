import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectPage } from './../../../store/actions/pages';

import './../Navbar/Navbar.css';

class FixedNavbar extends Component{

    render(){
        return(
            <nav className="editor-navbar navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav menu">
                        <li className="editor-nav-item nav-item">
                            <a className="nav-link editor-nav-link" href= "#">Save</a>
                        </li>
                        <li className="editor-nav-item nav-item">
                            <a className="nav-link editor-nav-link" href= "#">Undo</a>
                        </li>
                        <li className="editor-nav-item nav-item">
                            <a className="nav-link editor-nav-link" href= "#">Preview</a>
                        </li>
                        <li className="editor-nav-item nav-item">
                            <a className="nav-link editor-nav-link" href= "#">Publish</a>
                        </li>
                        <li className="editor-nav-item nav-item dropdown">
                            <a href= "#" className="nav-link editor-nav-link dropdown-toggle" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Pages
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            {
                                this.props.pages.map(page => 
                                <button 
                                    className="dropdown-item"
                                    onClick= {() => {
                                        this.props.selectPage(page);
                                    }}
                                > {page.title} </button>
                                )
                            }
                                <button 
                                    className= "dropdown-item"
                                    onClick= {this.props.openAddPageModal}
                                >
                                    <i class="fas fa-plus"></i> Add Page
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => ({
    pages: state.pages
});

const mapDispatchToProps = (dispatch) => ({
    selectPage: (page) => dispatch(selectPage(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(FixedNavbar);
