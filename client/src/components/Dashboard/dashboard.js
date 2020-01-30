import React, { Component } from 'react';
import { connect } from 'react-redux';
import FixedNavbar from '../Navbar/FixedNavbar'
import Header from './../Header/header';
import './dashboard.css';
import {Link} from 'react-router-dom'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

class Dashboard extends Component {
  
  componentDidMount(){
  }

  render() {
    return (
      <div>
        <Navbar/>  
            <div className="box"> 
              <p id="p"> All Sites</p>
              <div className="flex-container"> 
              {
                this.props.websites.map((website) => <div className="card container-div"> {website.title} </div> )
              }               
                <div class="card container-div-create">
                  <p className="div-text-create">Start to Create a New Templete </p>
                  <p id="pargraph-card-craete">Start Desgin Your Sites</p>
                  <Link to ="/createProject" className="btn btn-default btn-lg btn-create-div" href="#">Create New Website</ Link>
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
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

