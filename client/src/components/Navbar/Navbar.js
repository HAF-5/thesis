import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { setElements } from './../../store/actions/elements';

import './FixedNavbar.css';

class FixedNavbar extends Component{

    render(){
        return(
            <div className="NavarEdit">
                <nav className="navbar navbar-expand-lg navbar-ligth navedit">
                    <div class="dropdown show">
                        <a class="btn btn-secondary dropdown-toggle page-btn" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        pages 
                        </a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            {
                                this.props.pages.map(page => 
                                <button 
                                    className="dropdown-item"
                                    onClick= {() => {this.props.setElements(page._id)}}
                                > {page.title} </button>
                                )
                            }
                        </div>
                    </div>
                    <div className="collapse navbar-collapse" id="navbareditor" >
                    <ul className="navbar-nav ml-auto">
                        
                        <li className="nav-item">
                        <a className="nav-link" href="#">Save</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" data-toggle="popover" data-placement="bottom" title="see what your site looks like before you publish it" href="#">Preview</a>
                        </li>
                        <li className="nav-item"id="publish">
                        <a className="nav-link" data-toggle="tooltip" data-placement="bottom-center" title="click publish to go with your site live">Publish</a>
                        </li>
                    </ul>
                    </div>
                </nav>
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    pages: state.pages
});

const mapDispatchToProps = (dispatch) => ({
    setElements: (pageId) => dispatch(setElements(pageId))
});

export default connect(mapStateToProps, mapDispatchToProps)(FixedNavbar);
