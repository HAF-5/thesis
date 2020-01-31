import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';


import FixedNavbar from '../Navbar/FixedNavbar'
import Footer from '../Footer/Footer';

import { selectWebsite } from '../../store/actions/websites';

import './dashboard.css';

class Dashboard extends Component {
  
  componentDidMount(){
  }

  render() {
    return (
      <div>
        <FixedNavbar/>  
          <div className="box"> 
            <p id="p"> All Sites</p>
            <div className="flex-container"> 
            {
              this.props.websites.map((website) => (
                <div className="card container-div" key={website._id}> 
                  <Link to = {`/editor/${website.title}`}>
                    {website.title}
                  </Link>
                </div> 
                )
              )
            }               
              <div className="card container-div-create">
                <p className="div-text-create">Start to Create a New Templete </p>
                <p id="pargraph-card-craete">Start Desgin Your Sites</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

