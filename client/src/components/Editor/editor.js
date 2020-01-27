import React, { Component } from 'react';
import { connect } from 'react-redux';
import SideMenu from '../SideMenu/sideMenu';

class Editor extends Component {


    componentDidMount() {

    }

    render() {
        return (
            <div id= "editor-cotainer">
                <SideMenu/>
                <div id= "editor">

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
