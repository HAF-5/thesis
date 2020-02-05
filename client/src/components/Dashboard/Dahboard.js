import React, { Component } from 'react'
import './dashboard.css';

import {Link} from 'react-router-dom';

class Dahboard extends Component {
    render() {
        return (
          
  <div className="sideBar_nav_continer">       
     <input type="checkbox" id="check" />
       <label className="sidebar_lable" htmlFor="check">
            <i className="fas fa-bars" id="btn"></i>
            <i className="fas fa-times" id="cancel"></i>
       </label>
        <div className="sidebar_dev_continar">
        <div className="sidebar_Header">
                <h1 className="sidebar_Header_h1">My Site <br /><span className="sidebar_Header_p"> Role: Owner</span>
                <br /><br /> 
                <span className="sidebar_Header_p_setUp"> SetUp your site 
                </span>
                </h1>
        </div>
        <ul className="sidebar_ul">
                <li className="sidebar_ul_li"><a className="sidebar_herf" href="#"><i className="fas fa-qrcode"></i>Dashboard</a></li>
                <li className="sidebar_ul_li"><a className="sidebar_herf" href="#"><i className="fas fa-link"></i>Shortcuts</a></li>
                <li className="sidebar_ul_li"><a className="sidebar_herf" href="#"><i className="fas fa-stream"></i>Overview</a></li>
                <li className="sidebar_ul_li"><a className="sidebar_herf" href="#"><i className="fas fa-calendar-week"></i>Events</a></li>
                <li className="sidebar_ul_li"><a className="sidebar_herf" href="#"><i className="far fa-question-circle"></i>About</a></li>
                <li className="sidebar_ul_li"><a className="sidebar_herf" href="#"><i className="fas fa-sliders-h"></i>Services</a></li>
                <li className="sidebar_ul_li"><a className="sidebar_herf" href="#"><i className="far fa-envelope"></i>Contact</a></li>
        </ul>
        
       <div className="sidebar_footer">
       <div className="sidebar_footer-btn_border"><Link to ="#" className ="btn btn-default  btn-lg btn-Upgrad-footer">Create</ Link>
       </div>   
       <div className="edit_info_footer">
          <p className="edit-footer-pragraph">   <i className="fas fa-pencil-alt edit-icons-space"> </i> Edit Site</p>  
         </div>
       </div>
    </div>
    </div>
     )
    }
}

export default Dahboard;
