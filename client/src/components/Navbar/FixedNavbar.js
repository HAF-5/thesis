import React, { Component } from 'react';

export default class FixedNavbar extends Component{
    render(){
        return(
            <div >
                <div className="d-flex flex-column flex-md-row align-items-center p-3 mb-3 bg-white " >
                    <h5 className="my-0 mr-md-auto font-weight-normal">H A F 5</h5>
                    <h5 className="btn btn-outline-primary" >DashBoard</h5>
                    <div> Profile</div>
                </div>
            </div>
        )
    }
}
