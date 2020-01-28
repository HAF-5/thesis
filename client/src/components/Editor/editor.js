import React, { Component } from 'react';
import { connect } from 'react-redux';
import SideMenu from '../SideMenu/sideMenu';
import  './Editor.css';

class Editor extends Component {


    componentDidMount() {

    }

    render() {
        return (
            <div className="row">
                    <SideMenu />
                <div className=" col-md-11" id="editor" >
                    <p>Panel</p>
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
