import React, { Component } from 'react'
import './createProject.css'
import { Link } from 'react-router-dom';
import Dashboard from '../Dashboard/dashboard';


// import '../../../node_modules/font-awesome/css/font-awesome.min.xss'

export default class CreateProject extends Component {
   
  
    render() {
        return (
            <div className="create-project_container">
                <div className="create-project_left">
                    <h2 className="create-project_title"> HAF 5 </h2> 
                    <div className="create-project_left-text">
                        Review and edit your info  
                    </div> 
                    <Link to="Dashboard" className="create-project_back">Back</Link>
                </div>               
                <div className="create-project_right">    
                    <form className="create-project_form">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 xs={6} md={4}">
                                <label> logo </label>
                                <img  src="dsdsd" roundedCircle/>
                                </div>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label create_project_labal_form">Name</label>
                            <div className="col-sm-10">
                            <input type="email" className="form-control create_form-input"   placeholder="Enter Your Name" />
                            </div>
                        </div>
                        
                        <div className="form-group row">
                            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label create_project_labal_form">Email</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control create_form-input" id="colFormLabel"  placeholder="Enter Your Email" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label create_project_labal_form">Address</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control create_form-input" id="colFormLabel"  placeholder="Enter Your Address" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label create_project_labal_form">Phone</label>
                            <div className="col-sm-10">
                                <input type="number" className="form-control create_form-input" id="colFormLabel"  placeholder="Enter Your Number" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="colFormLabel" className="col-sm-2 col-form-label create_project_labal_form">Description</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control create_form-input" id="colFormLabel"
                                placeholder="Enter Your Description"/>
                            </div>
                        </div>
                    </form>     
                    <Link to="#" className="btn  create-Project_nextPage" href="#" >Next</Link>  
                </div>            
            </div>
        )
    }
}
