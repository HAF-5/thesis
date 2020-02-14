import React, { Component } from 'react'
import { connect } from 'react-redux'; 

class ElementCreator extends Component {

    arrOfElements = [
        <button style= {{backgroundColor: 'blue'}} onClick= {(e) => this.props.createElement(e)}>ok</button>,
        <button onClick= {(e) => this.props.createElement(e)}>no</button>,
        <h1 onClick= {(e) => this.props.createElement(e)}>no</h1>
    ]

    render() {
        return (
            <div>
                {
                    this.arrOfElements.map(element => <li>{element}</li>)
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(ElementCreator);
