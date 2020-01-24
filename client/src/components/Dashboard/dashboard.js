import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './../Header/header';

export class home extends Component {
  
  componentDidMount(){
  }

  render() {
    return (
      <div>
        <Header/>
        <h1>WELCOME TO HAF</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(home)

