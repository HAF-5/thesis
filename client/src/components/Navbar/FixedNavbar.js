import React, { Component } from 'react';
import './FixedNavbar.css'
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
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light navbarFixed">
                    <h5 className="my-0 mr-md-auto font-weight-normal">H A F 5</h5>
                    <div id="navbarText">   
                        <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Dashboard </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Save</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Publish</a>
                        </li>
                        </ul>                  
                    </div>
                </nav>
            </div>

        )
    }
}
