import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';


import FixedNavbar from '../Navbar/FixedNavbar'
import Footer from '../Footer/Footer';

import { selectWebsite } from '../../store/actions/websites';

import './mySites.css';

class MySites extends Component {
  


  render() {
    return (
      <div>
        <FixedNavbar/>  
          <div className="box"> 
            <div className="container-fluid dashboard-title">
              <h1> My Sites </h1> 
              <span>Select a site to edit, view and open its dashboard.</span>
            </div>
          
            <div className="container flex-container"> 
            {
              this.props.websites.map((website) => (
                <div 
                  className="card container-div" 
                  key={website._id}
                > 
                  <Link 
                    to = {`/editor/${website._id}`}
                  >
                    {website.title}
                    
                  </Link>
                </div> 
                )
              )
            }               
              <div className="card container-div-create">

                <p className="div-text-create">Start to Create a New Templete </p>
                <p className="pargraph-card-craete">Start Desgin Your Sites</p>
                <Link to ="/createProject" className ="btn btn-default btn-lg btn-create-div">Create New Website</ Link>
              </div>   
            </div>
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
  selectWebsite: (payload) => dispatch(selectWebsite(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(MySites)

