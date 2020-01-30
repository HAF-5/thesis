import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './FixedNavbar.css';

export default class FixedNavbar extends Component{
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
      
    render(){
        return(
            <div className="NavarEdit">
                <nav className="navbar navbar-expand-lg navbar-ligth navedit">
                <div class="dropdown show">
                    <a class="btn btn-secondary dropdown-toggle page-btn" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Pages: HOME 
                     </a>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a class="dropdown-item" href="#">HOME</a>
                        <a class="dropdown-item" href="#">About</a>
                        <a class="dropdown-item" href="#">Offer</a>
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
