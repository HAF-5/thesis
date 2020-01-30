import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setMenuElementDispatcher } from './../../store/actions/sideMenu';
import {elementsData} from './../../sideMenuElementsData';
import './sideMenu.css'

class sideMenu extends Component {

    styles(styles) {
        let style = {};
        styles.forEach(element => {
            style[`${element.property}`] = element.value;
        });
        return style;
    }

    createElement(elements) {
        return elements.map(elt => 
            React.createElement(
                elt.element, 
                {
                    style: this.styles(elt.style),
                    className: elt.classList.join(' ')
                }, 
                (elt.children.length > 0) ? this.createElement(elt.children) : null,
                elt.content
            )
        )
    }
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
                                            this.createElement(item.elements).map(element => <li className="">{element}</li>)
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
    setMenuElements: (payload) => dispatch(setMenuElementDispatcher(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(sideMenu)
