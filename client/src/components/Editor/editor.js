import React, { Component } from 'react';
import { connect } from 'react-redux';

import SideMenu from '../SideMenu/sideMenu';
import FixedNavbar from '../Navbar/FixedNavbar';
import Navbar from '../Navbar/Navbar';

import { setPages } from './../../store/actions/pages';

import  './Editor.css';

class Editor extends Component {

    styles(styles) {
        return styles.map(style => `${style.property}:${style.value}`).join('; ');
    }

    createNode({element, content, style, classList}) {
        let node = document.createElement(element);
        let textNode = document.createTextNode(content);
        node.classList = classList.join(' ');
        node.contentEditable='true';
        node.onInput = e => console.log('Text inside div', e.currentTarget.textContent)
        node.setAttribute('style', this.styles(style));
        node.appendChild(textNode);
        return node;
    }

    createElement(element) {
        let elt = this.createNode(element);
        element.children.map(childNode => {
            elt.appendChild(this.createNode(childNode));
        });
        return elt;
    }

    componentDidMount() {
        this.props.setPages(this.props.website._id);
        this.props.elements.map((element, i) => {
            document.getElementById("editor").appendChild(this.createElement(element));   
        });
    }

    render() {
        return (
            <div>
                <FixedNavbar/>
                <Navbar/>
                <div className="row">
                <SideMenu />
                <div className=" col-md-11" id="editor" >
                    
                </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    pages: state.pages,
    elements: state.elements.elements,
    website: state.websites.filter(website => website.title === props.match.params.title)[0]
});
const mapDispatchToProps = (dispatch) => ({
    setPages: (payload) => dispatch(setPages(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
