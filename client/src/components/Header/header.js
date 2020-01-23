import React, { Component } from 'react';
import { connect } from 'react-redux';
import {logout} from './../../store/actions/user';
class header extends Component {

    constructor(props){
        super(props);
        this.onLogout = this.onLogout.bind(this)
    }

    onLogout(){
        console.log('logout');
        this.props.logout();
    }
    render() {
        return (
            <div>
                <button onClick = {this.onLogout}>logout</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(header)
