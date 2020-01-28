import React, { Component } from 'react';
import { connect } from 'react-redux';
import SideMenu from '../SideMenu/sideMenu';
import  './Editor.css';

class Editor extends Component {


    componentDidMount() {

    }

    render() {
        return (
            <div >
               <div className="row">
                    <SideMenu />
                    <div className=" col-md-10" id="editor" >
                        <p>Panel</p>
                    </div>
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
