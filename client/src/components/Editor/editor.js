import React, { Component } from 'react';
import { connect } from 'react-redux';
import SideMenu from '../SideMenu/sideMenu';

class Editor extends Component {


    componentDidMount() {

    }

    render() {
        return (
            <div>
               <div className="d-flex flex-column flex-md-row align-items-center p-3 mb-3 bg-white " >
               <h1 style={{fontSize: "20px"}}> Select and Drag Section to Page </h1>
               
               </div>    
                <SideMenu/>
                <div id="editor">

                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
});
const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
