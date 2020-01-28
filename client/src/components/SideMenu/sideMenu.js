import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setMenuElementDispatcher } from './../../store/actions/sideMenu';
import {elementsData} from './../../sideMenuElementsData';

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
            <div>
                {
                    this.props.menuItems.map(item => (
                        <div>
                            <h3>{item.title}</h3>
                            {
                                this.createElement(item.elements)
                            }
                            
                        </div>
                    ))
                }
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
