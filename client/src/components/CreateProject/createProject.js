import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './createProject.css'
import {addWebsite} from '../../store/actions/websites'
// import '../../../node_modules/font-awesome/css/font-awesome.min.xss'

class CreateProject extends Component {
   	constructor(props){
		 super(props);
			this.state ={
				values:{
					title:'',
					description:'',
						phoneNumber: null,
        		email: ''

				},
			isSubmitting: false,
    	isError: false
			};
		}
		 
	 handleInputChange =  event =>{
	 	this.setState({
	 	values: { ...this.state.values, [event.target.name]: event.target.value }
	 	});
}
 	submitForm = event => {
		 event.preventDefault();
		 let data ={
			user:this.props.user,
			title:this.state.values.title,
			description:this.state.values.description,
			contact:{
				email:this.state.values.email,
				phoneNumber:this.state.values.phoneNumber
			}
		 }
		 
	 	this.props.addWebsite(data,(id)=> this.props.history.push(`/editor/${id}`));
 	}
  
    render() {
        return (
            <div className="create-project_container">
                <div className="create-project_left">
									<ToastContainer/>
                    <h2 className="create-project_title"> HAF 5 </h2> 
                    <div className="create-project_left-text">
                        Review and Edit your informations  
                    </div> 
                    <Link to="sites" className="create-project_back">Back</Link>
                </div>               
                <div className="create-project_right">    
                    <form onSubmit={this.submitForm} className="create-project_form">
                        {/* <div className="container">
                            <div className="row">
                                <div className="col-md-4 xs={6} md={4}">
                                <label> logo </label>
                                <img  src="dsdsd" roundedCircle/>
                                </div>
                            </div>
                        </div> */}

                        <div className="form-group row">
                            <label htmlFor="colFormLabel" className="col-sm-4 col-form-label create_project_labal_form">Website Name</label>
                            <div className="col-sm-8">
                            <input type="text" name="title" id="title" value={this.state.values.title} onChange={this.handleInputChange} title="title" required className="form-control create_form-input"  placeholder="Enter Your Name" />
                            </div>
                        </div>
                        
                        <div className="form-group row">
                            <label htmlFor="colFormLabel" className="col-sm-4 col-form-label create_project_labal_form">Email</label>
                            <div className="col-sm-8">
                                <input type="email" name="email" id="email" value={this.state.values.email} onChange={this.handleInputChange} title="email" required  className="form-control create_form-input"  placeholder="Enter Your Email" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="colFormLabel" className="col-sm-4 col-form-label create_project_labal_form">Phone Number</label>
                            <div className="col-sm-8">
                                <input type="number" name="phoneNumber" id="phoneNumber" value={this.state.values.phoneNumber} onChange={this.handleInputChange} title="phoneNumber" required className="form-control create_form-input"  placeholder="Enter Your Number" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="colFormLabel" className="col-sm-4 col-form-label create_project_labal_form">Description</label>
                            <div className="col-sm-8">
                                <textarea type="text" name="description" id="description" value={this.state.values.description} onChange={this.handleInputChange} title="description" required className="form-control create_form-input" placeholder="Enter Your Description"/>
                            </div>
                        </div>
							<button  type="submit" className="btn create-Project_nextPage"  >  Next</button> 
                    </form>     
                    
                </div>            
            </div>
        )
    }
}

const mapStateToProps = (state) =>({
	user: state.user._id
})

const mapDispatchToProps = (dispatch) => ({
	addWebsite:(website,cb) => dispatch(addWebsite(website,cb))
})
export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);