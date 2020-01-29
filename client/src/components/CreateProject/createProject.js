import React, { Component } from 'react'
import './createProject.css'
import { Link } from 'react-router-dom';
import Dashboard from '../Dashboard/dashboard';
// import '../../../node_modules/font-awesome/css/font-awesome.min.xss'

export default class CreateProject extends Component {
    render() {
        return (
            <div className="continer">
                <div className="left">
                   <h2 className="header-title"> HAF 5 </h2> 
                   <div className="left-text">
                       Create Your Own Template 
                   </div>
                   <Link to="Dashboard" className="back"><i class="fa fa-long-arrow-left icons"></i>Back</Link>
                </div>
               
            <div className="right">
                right   
            </div>                
            </div>
        )
    }
}