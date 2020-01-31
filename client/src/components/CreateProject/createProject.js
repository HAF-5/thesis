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
                <Link to="Dashboard" className="back"><i className="fa fa-long-arrow-left    icons"></i>Back</Link>
                </div>               
         <div className="right">    
          <form className="form-position">
            <div className="form-group row">
            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label label-color">Name</label>
            <div className="col-sm-10">
            <input type="email" className="form-control input-border" id="colFormLabel"  placeholder="Enter Your Name" />
            </div>
            </div>
             
            <div className="form-group row">
            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label label-color">Email</label>
            <div className="col-sm-10">
            <input type="email" className="form-control input-border" id="colFormLabel"  placeholder="Enter Your Email" />
            </div>
            </div>

            <div className="form-group row">
            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label label-color">Address</label>
            <div className="col-sm-10">
            <input type="text" className="form-control input-border" id="colFormLabel"  placeholder="Enter Your Address" />
            </div>
            </div>

            <div className="form-group row">
            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label label-color">Phone</label>
            <div className="col-sm-10">
            <input type="number" className="form-control input-border" id="colFormLabel"  placeholder="Enter Your Number" />
            </div>
            </div>

            <div className="form-group row">
            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label label-color">Description</label>
            <div className="col-sm-10">
            <input type="text" className="form-control input-border" id="colFormLabel"/>
            </div>
            </div>
        </form>     
        <Link to="#" className="btn btn-outline-primary next" href="#" >Next</Link>  
            </div>            
            </div>
        )
    }
}
