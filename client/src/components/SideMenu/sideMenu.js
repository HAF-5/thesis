import React, { Component } from 'react';
import { connect } from 'react-redux';
import './sideMenu.css'
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Draggable from 'react-draggable';

class sideMenu extends Component {
  constructor(props){
    super(props);
      this.state = {
        contxt: props
      }
    
  }
    render() {
        return (
          <div >
              <div className="container-fluid">
                <div className="row">
                  <div class="col-md-2 sidebar">
                    <div class="container">
                      <ul class="sideList">
                        <li class="">
                          Navbar
                          <ul class="">
                            <li class="">Navbar 1</li>
                            <li class="">Navbar 2</li>
                            <li class="">Navbar 3</li>
                            <li class="">Navbar 4</li>
                            <li class="">NAvbar 5</li>
                          </ul>
                        </li>
                        <li class="">
                          Header
                          <ul class="">
                            <li class="">Header 1</li>
                            <li class="">Header 2</li>
                            <li class="">Header 3</li>
                            <li class="">Header 4</li>
                            <li class="">Header 5</li>
                          </ul>
                        </li>                        
                        <li class="">
                          Section
                          <ul class="">
                            <li class="">Section 1</li>
                            <li class="">Section 2</li>
                            <li class="">Section 3</li>
                            <li class="">Section 4</li>
                            <li class="">Section 5</li>
                          </ul>
                        </li>        
                        <li class="">
                          Form
                          <ul class="">
                            <li class="">Form 1</li>
                            <li class="">Form 2</li>
                            <li class="">Form 3</li>
                          </ul>
                        </li>                                       
                        <li class="">
                          Contact 
                          <ul class="">
                            <li class="">Contact 1</li>
                            <li class="">Contact 2</li>
                            <li class="">Contact 3</li>
                            <li class="">Contact 4</li>
                            <li class="">Contact 5</li>
                          </ul>
                        </li> 
                        <li class="">
                          Menu 
                          <ul class="">
                            <li class="">Menu 1</li>
                            <li class="">Menu 2</li>
                            <li class="">Menu 3</li>
                            <li class="">Menu 4</li>
                            <li class="">Menu 5</li>
                          </ul>
                        </li>  
                        <li class="">
                          Team 
                          <ul class="">
                            <li class="">Team 1</li>
                            <li class="">Team 2</li>
                            <li class="">Team 3</li>
                            <li class="">Team 4</li>
                            <li class="">Team 5</li>
                          </ul>
                        </li>  
                        <li class="">
                          Timeline 
                          <ul class="">
                            <li class="">Timeline 1</li>
                            <li class="">Timeline 2</li>
                            <li class="">Timeline 3</li>
                          </ul>
                        </li>                                                       
                        <li class="">
                          Footer 
                          <ul class="">
                            <li class="">Footer 1</li>
                            <li class="">Footer 2</li>
                            <li class="">Footer 3</li>
                          </ul>
                        </li>                                                                                        
                                 
                  </ul>

                </div>
                  </div>
                </div>
              </div>
          </div>
        )
    }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(sideMenu)
