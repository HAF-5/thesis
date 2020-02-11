import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';


import FixedNavbar from '../Navbar/FixedNavbar'
import Footer from '../Footer/Footer';

import { selectWebsite, deleteWebsite } from '../../store/actions/websites';

import './mySites.css';

class MySites extends Component {
  state = {
    isActive:false
 }

  handleShow = ()=>{
     this.setState({
         isActive: true
     })
  }

  handleHide = () =>{
     this.setState({
         isActive: false
     })
  }

  deleteWebsite(event,id){
    event.preventDefault()
    this.props.deleteWebsite(id);
  }

  render() {
    return (
      <div>
        <FixedNavbar/>  
          <div className="box"> 
            <div className=" dashboard-title">
              <h1> My Sites </h1> 
              <span>Select a site to edit, view and open its dashboard.</span>
            </div>
            <div className="container filter">
              <div className="filter-view">
                <button onClick={this.handleHide} value="grid"  type="button" data-toggle="tooltip" data-placement="top" title="Grid View" className="filter-grid">
                <svg viewBox="0 1 24 24"  width="24" height="24"><path d="M13,11 L18,11 L18,6 L13,6 L13,11 Z M19,6 L19,12 L12,12 L12,5 L18,5 C18.5522847,5 19,5.44771525 19,6 Z M13,19 L18,19 L18,14 L13,14 L13,19 Z M19,13 L19,19 C19,19.5522847 18.5522847,20 18,20 L12,20 L12,13 L19,13 Z M5,11 L10,11 L10,6 L5,6 L5,11 Z M11,5 L11,12 L4,12 L4,6 C4,5.44771525 4.44771525,5 5,5 L11,5 Z M5,19 L10,19 L10,14 L5,14 L5,19 Z M11,13 L11,20 L5,20 C4.44771525,20 4,19.5522847 4,19 L4,13 L11,13 Z"></path></svg>
                </button>
                <button onClick={this.handleShow} value="grid"  type="button" data-toggle="tooltip" data-placement="top" title="List View" className="filter-grid" >
                <svg viewBox="0 1 24 24"  width="24" height="24"><path d="M5,6 L5,7 L18,7 L18,6 L5,6 Z M19,6 L19,8 L4,8 L4,6 C4,5.44771525 4.44771525,5 5,5 L18,5 C18.5522847,5 19,5.44771525 19,6 Z M5,10 L5,11 L18,11 L18,10 L5,10 Z M19,9 L19,12 L4,12 L4,9 L19,9 Z M5,14 L5,15 L18,15 L18,14 L5,14 Z M19,13 L19,16 L4,16 L4,13 L19,13 Z M5,18 L5,19 L18,19 L18,18 L5,18 Z M19,17 L19,19 C19,19.5522847 18.5522847,20 18,20 L5,20 C4.44771525,20 4,19.5522847 4,19 L4,17 L19,17 Z"></path></svg>                </button>
              </div>
            </div>
            
            {this.state.isActive ? 
              <div className="container list-view ">
                <div className="table-title-bar">
                      <table className="table">
                        {/* <caption>List of users</caption> */}
                        <thead>
                        <tr>
                          <th ></th>
                          <th >Name</th>
                          <th >Date Created</th>
                          <th > </th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.websites.map((website) =>(
                        <tr>
                          <th scope="row"><div className="custom-control custom-checkbox custom-control-inline">
                            <input type="checkbox" className="custom-control-input" id={website._id}/>
                            <label className="custom-control-label" for={website._id}></label>
                            </div>
                          </th>
                          <td>{website.title}</td>
                          <td>{website.createdAt}</td>                        
                          <td> 
                            <div class="btn-group dropup ">
                              <button class="btn dropdown-toggle option-site-list" data-toggle="dropdown">
                              <svg viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px">
                                <path d="M6,12.5 C6,11.6715729 6.66579723,11 7.5,11 C8.32842712,11 9,11.6657972 9,12.5 C9,13.3284271 8.33420277,14 7.5,14 C6.67157288,14 6,13.3342028 6,12.5 Z M11,12.5 C11,11.6715729 11.6657972,11 12.5,11 C13.3284271,11 14,11.6657972 14,12.5 C14,13.3284271 13.3342028,14 12.5,14 C11.6715729,14 11,13.3342028 11,12.5 Z M16,12.5 C16,11.6715729 16.6657972,11 17.5,11 C18.3284271,11 19,11.6657972 19,12.5 C19,13.3284271 18.3342028,14 17.5,14 C16.6715729,14 16,13.3342028 16,12.5 Z"></path>
                              </svg>
                              </button>
                              <div class="dropdown-menu action-list site-list">
                                <button className="btn" key={website._id} onClick={(e) => this.deleteWebsite(e, website._id)} ><svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" class="ListItemAction3311636269--prefixIcon" data-hook="list-item-action-prefix-icon"><path d="M17,17 C17,18.6568542 15.6568542,20 14,20 L9,20 C7.34314575,20 6,18.6568542 6,17 L6,7 L5,7 L5,6 L18,6 L18,7 L17,7 L17,17 Z M9,9 L10,9 L10,16 L9,16 L9,9 Z M11,9 L12,9 L12,16 L11,16 L11,9 Z M13,9 L14,9 L14,16 L13,16 L13,9 Z M7,17 C7,18.1045695 7.8954305,19 9,19 L14,19 C15.1045695,19 16,18.1045695 16,17 L16,7 L7,7 L7,17 Z M13,6 L13,5 L10,5 L10,6 L9,6 L9,5 C9,4.44771525 9.44771525,4 10,4 L13,4 C13.5522847,4 14,4.44771525 14,5 L14,6 L13,6 Z"></path></svg>Move to Trash</button>
                                <button className="btn "><svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" class="ListItemAction3311636269--prefixIcon" data-hook="list-item-action-prefix-icon"><path d="M18.5,5 L13,5 L12,5 L6.5,5 C5.673,5 5,5.673 5,6.5 L5,10 L6,10 L6,6.5 C6,6.224 6.225,6 6.5,6 L12,6 L12,18 L9,18 L9,19 L16,19 L16,18 L13,18 L13,6 L18.5,6 C18.775,6 19,6.224 19,6.5 L19,10 L20,10 L20,6.5 C20,5.673 19.327,5 18.5,5"></path></svg>Rename Site</button>
                                <button className="btn "><svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" class="ListItemAction3311636269--prefixIcon" data-hook="list-item-action-prefix-icon"><path d="M19.918,12.298 L20,12.5 L19.918,12.701 C19.813,12.959 17.293,19 11.5,19 C5.707,19 3.187,12.959 3.082,12.701 L3,12.5 L3.082,12.298 C3.187,12.041 5.707,6 11.5,6 C17.293,6 19.813,12.041 19.918,12.298 Z M4.089,12.499 C4.567,13.51 6.932,17.964 11.5,17.964 C16.08,17.964 18.435,13.512 18.911,12.5 C18.433,11.49 16.068,7.036 11.5,7.036 C6.92,7.036 4.565,11.488 4.089,12.499 Z M11.5,15.75 C9.70507456,15.75 8.25,14.2949254 8.25,12.5 C8.25,10.7050746 9.70507456,9.25 11.5,9.25 C13.2949254,9.25 14.75,10.7050746 14.75,12.5 C14.75,14.2949254 13.2949254,15.75 11.5,15.75 Z M11.5,14.75 C12.7426407,14.75 13.75,13.7426407 13.75,12.5 C13.75,11.2573593 12.7426407,10.25 11.5,10.25 C10.2573593,10.25 9.25,11.2573593 9.25,12.5 C9.25,13.7426407 10.2573593,14.75 11.5,14.75 Z"></path></svg>view Live Site</button>
                              </div>
                            </div>
                          </td>
                          </tr>))
                        } 
                        </tbody>
                      </table>
                    </div>
              </div> :  
              <div className="container flex-container"> 
                  {this.props.websites.map((website) => (
                    <div  className="card container-div" key={website._id}> 
                      <Link to = {`/editor/${website._id}`}>{website.title}</Link> 
                    </div>))
                  } 
              <div className="card container-div-create">
                <p className="div-text-create">Start to Create a New Templete </p>
                <p className="pargraph-card-craete">Start Desgin Your Sites</p>
                <Link to ="/createProject" className ="btn btn-default btn-lg btn-create-div">Create New Website</ Link>
              </div>   
            </div>
            }  
            
          </div>
        <Footer/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  websites: state.websites
})

const mapDispatchToProps = (dispatch) => ({
  selectWebsite: (payload) => dispatch(selectWebsite(payload)),
  deleteWebsite: (payload) => dispatch(deleteWebsite(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(MySites)

