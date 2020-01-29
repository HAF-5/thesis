import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './../Header/header';
import './dashboard.css'

class Dashboard extends Component {
  
  componentDidMount(){
  }

  render() {
    return (
      <div>
        <Header/>
        <div>
            <div className="header-box">
            <div className="header-position">
            <h1> My Sites</h1>  
            <p className="font">Select a site to edit, view and open its dashboard</p>
             </div>
            <a className="btn btn-outline-primary btn-create" href="#" >Create New Website</ a>
            </div>   
            <div className="box"> 
            <p id="p"> All Sites</p>
                <div className="flex-container">                
                    <div className="card container-div">  Website </div> 
                    <div className="card container-div">  Website </div> 
                    <div className="card container-div">  Website </div> 
                    <div className="card container-div">  Website </div> 
                    <div class="card container-div-create">
                    <p className="div-text-create">Start to Create a New Templete </p>
                    <p id="pargraph-card-craete">Start Desgin Your Sites</p>
                    <a className="btn btn-default btn-lg btn-create-div" href="#">Create New Website</ a>
                    </div>   
                    </div>
           </div>
           <footer className="pt-3 my-md-2 pt-md-4">
                    <div className="container">
                    <div className="row">
                    <div className="col-6 col-md">
                        <h5>Features</h5>
                        <ul className="list-unstyled text-small">
                        <li><a className="text-muted" href="#">Cool stuff</a></li>
                        <li><a className="text-muted" href="#">Another one</a></li>
                        <li><a className="text-muted" href="#">Last time</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Resources</h5>
                        <ul className="list-unstyled text-small">
                        <li><a className="text-muted" href="#">Resource</a></li>
                        <li><a className="text-muted" href="#">Resource name</a></li>
                        <li><a className="text-muted" href="#">Another resource</a></li>

                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>About</h5>
                        <ul className="list-unstyled text-small">
                        <li><a className="text-muted" href="#">Team</a></li>
                        <li><a className="text-muted" href="#">Locations</a></li>
                        <li><a className="text-muted" href="#">Privacy</a></li>
                        </ul>
                    </div>
                    </div>
                    </div>
                </footer>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

