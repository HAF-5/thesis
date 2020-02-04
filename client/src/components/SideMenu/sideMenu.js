import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setMenuElementDispatcher } from './../../store/actions/sideMenu';
import { addElement } from './../../store/actions/elements';

import { elementsData } from './../../sideMenuElementsData';

import './sideMenu.css'

class sideMenu extends Component {

    state = {
        display: false
    }
    componentDidMount() {
        console.log( elementsData )
        this.props.setMenuElements(elementsData);
    }

    render() {
        return (
            <div
                className="sideMenu" 
                onMouseOver= {() => this.setState(() => ({display: true}))}
                onMouseLeave= {() => this.setState(() => ({display: false}))}
            >
                <button 
                    className="btn btn-rounded-purble"
                    onMouseOver= {() => this.setState(() => ({display: true}))}
                    onMouseLeave= {() => this.setState(() => ({display: false}))}
                >
                    <i className="fas fa-pencil-alt"></i>
                </button>

                <ul className={ this.state.display? "list-unstyled sideMenu-menu display" : "list-unstyled sideMenu-menu"}>
                    {
                        this.props.menuItems.map(item => (
                            <li>
                                <button className="btn btn-rounded-purble">
                                    {item.title}
                                    <ul className="list-unstyled subMenu">
                                        {/* li >> element */}
                                        {
                                            item.elements.map(element => <li onClick= {() => {
                                                this.props.addElement(element);
                                            }} dangerouslySetInnerHTML={{ __html: element.element }} className=""></li>)
                                        }
                                    </ul>
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    menuItems: state.sideMenuElements
})

const mapDispatchToProps = (dispatch) => ({
    setMenuElements: (payload) => dispatch(setMenuElementDispatcher(payload)),
    addElement: (payload) => dispatch(addElement(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(sideMenu)
