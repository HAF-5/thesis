import React, { Component } from 'react';
import { connect } from 'react-redux';
import SideMenu from '../SideMenu/sideMenu';
import { element } from 'prop-types';

class Editor extends Component {

    styles(styles) {
        return styles.map(style => `${style.property}:${style.value}`).join('; ');
    }

    createNode({element, content, style, classList}) {
        let node = document.createElement(element);
        let textNode = document.createTextNode(content);
        classList.map(classs => {
            node.classList.add(classs);
            if(classs === 'editable'){
                node.contenteditable="true";
                node.addEventListener("input", function() {
                    console.log("input event fired");
                }, false); 
            }
        });
        node.setAttribute('style', this.styles(style));
        node.appendChild(textNode);
        return node;
    }

    createElement(element) {
        let elt = this.createNode(element);
        elt.addEventListener("input", function() {
            console.log("input event fired");
        }, false);
        elt.contenteditable="true"
        element.children.map(childNode => {
            elt.appendChild(this.createNode(childNode));
        });
        return elt;
    }

    componentDidMount() {
        this.props.elements.map((element, i) => {
            document.getElementById("editor").appendChild(this.createElement(element));   
            // document.getElementById("gg").addEventListener("input", function() {
            //     console.log("input event fired");
            // }, false);
        });
        // let elts = [... document.getElementsByClassName('editable')];
        // console.log(typeof elts)
        // elts.map(element => {
        //     element.contenteditable="true"
        //     element.addEventListener("input", function() {
        //         console.log("input event fired");
        //     }, false); 
        // })
    }

    render() {
        return (
            <div id= "editor-cotainer">
                <SideMenu/>
                <div id= "editor">
                {/* <div contenteditable="true" id="gg">Please type something in here</div> */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    elements: state.elements.elements
});
const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
