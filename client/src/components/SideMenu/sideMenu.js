import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setMenuElementDispatcher } from './../../store/actions/sideMenu';
import { addElementDispatcher } from './../../store/actions/elements';

import { elementsData } from './../../sideMenuElementsData';

import './sideMenu.css'

class sideMenu extends Component {


    componentDidMount() {
        console.log( elementsData )
        this.props.setMenuElements(elementsData);
    }

    render() {
        console.log(this.props.menuItems)
        return (
            <div className=" col-md-1">
                <div className=" sidebar">
                    <div className="container">
                        <ul className="sideList">
                            {
                                this.props.menuItems.map(item => (
                                    <li className="">
                                        {item.title}
                                        <ul className="">
                                            {
                                                item.elements.map(element => <li onClick= {() => {
                                                    this.props.addElement(element);
                                                }} dangerouslySetInnerHTML={{ __html: element.element }} className=""></li>)
                                            }
                                        </ul>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    menuItems: state.sideMenuElements
})

const mapDispatchToProps = (dispatch) => ({
    setMenuElements: (payload) => dispatch(setMenuElementDispatcher(payload)),
    addElement: (payload) => dispatch(addElementDispatcher(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(sideMenu)
