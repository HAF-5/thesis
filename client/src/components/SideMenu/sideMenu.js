import React, { Component } from 'react';
import { connect } from 'react-redux';
import './sideMenu.css'
import ReactDOM from 'react-dom';
import $ from 'jquery';

class sideMenu extends Component {
  constructor(props){
    super(props);
      this.state = {
        // element:[]
      }
    
  }
    render() {
        return (
          <div className=" col-md-2">
          <div className=" sidebar">
            <div className="container">
              <ul className="sideList">
                <li className="">
                  Navbar
                  <ul className="">
                    <li className="">Navbar 1</li>
                    <li className="">Navbar 2</li>
                    <li className="">Navbar 3</li>
                    <li className="">Navbar 4</li>
                    <li className="">NAvbar 5</li>
                  </ul>
                </li>
                <li className="">
                  Header
                  <ul className="">
                    <li className="">Header 1</li>
                    <li className="">Header 2</li>
                    <li className="">Header 3</li>
                    <li className="">Header 4</li>
                    <li className="">Header 5</li>
                  </ul>
                </li>                        
                <li className="">
                  Section
                  <ul className="">
                    <li className="">Section 1</li>
                    <li className="">Section 2</li>
                    <li className="">Section 3</li>
                    <li className="">Section 4</li>
                    <li className="">Section 5</li>
                  </ul>
                </li>        
                <li className="">
                  Form
                  <ul className="">
                    <li className="">Form 1</li>
                    <li className="">Form 2</li>
                    <li className="">Form 3</li>
                  </ul>
                </li>                                       
                <li className="">
                  Contact 
                  <ul className="">
                    <li className="">Contact 1</li>
                    <li className="">Contact 2</li>
                    <li className="">Contact 3</li>
                    <li className="">Contact 4</li>
                    <li className="">Contact 5</li>
                  </ul>
                </li> 
                <li className="">
                  Menu 
                  <ul className="">
                    <li className="">Menu 1</li>
                    <li className="">Menu 2</li>
                    <li className="">Menu 3</li>
                    <li className="">Menu 4</li>
                    <li className="">Menu 5</li>
                  </ul>
                </li>  
                <li className="">
                  Team 
                  <ul className="">
                    <li className="">Team 1</li>
                    <li className="">Team 2</li>
                    <li className="">Team 3</li>
                    <li className="">Team 4</li>
                    <li className="">Team 5</li>
                  </ul>
                </li>  
                <li className="">
                  Timeline 
                  <ul className="">
                    <li className="">Timeline 1</li>
                    <li className="">Timeline 2</li>
                    <li className="">Timeline 3</li>
                  </ul>
                </li>                                                       
                <li className="">
                  Footer 
                  <ul className="">
                    <li className="">Footer 1</li>
                    <li className="">Footer 2</li>
                    <li className="">Footer 3</li>
                  </ul>
                </li>                                                                                                   
              </ul>
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
