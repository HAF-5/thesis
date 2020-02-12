import React, { Component } from 'react'
import { connect } from 'react-redux';
import elementReducer from '../../store/reducers/elements';
import $ from 'jquery';
import './jj.css';

class jj extends Component {
    state = {
        elements: [],
        selectedElement: null,
        selectedElementBoundary: {
            top: null,
            right: null,
            bottom: null,
            left: null
        }
    }
    createElement = (e, parent = 'content') => {
        // console.log(e.target);
        let element = e.target.cloneNode(true);
        element.id = 'j';
        element.style.position = 'fixed'
        this.setState((prevState) => ({elements: [...prevState.elements, {
            type: element.tagName,
            element}] 
        }));
        document.getElementById(parent).appendChild(element);
        element.addEventListener('dragstart', (e) => {
            console.log(e.target);
            e.dataTransfer.setData("id", element.id);
        });
        element.addEventListener('click',(e) => {
            if(this.state.selectedElement){
                console.log('0000',$('#selectedElementWrapper').children()[0]);
                $($('#selectedElementWrapper').children()[0]).unwrap();
            }
            $(e.target).wrap(`<div 
                                draggable
                                id = "selectedElementWrapper"
                                contentEditable ='true'>
                            </div>`)
                            
            let rect = document.getElementById('selectedElementWrapper').getBoundingClientRect();
            this.setState(() => ({selectedElement: e.target, selectedElementBoundary: {
                top: rect.top,
                right: rect.right,
                bottom: rect.bottom,
                left: rect.left
            }}));
            
            console.log(this.state.selectedElement);
        });
        console.log(this.state.elements);
    }

    componentDidMount() {    

    }

    handleOnDragOver(e) {
        e.preventDefault();
    }

    handleOnDrop(e) {
        let id = e.dataTransfer.getData("id");
        document.getElementById(id).style.position = "absolute" ;
        document.getElementById(id).style.left = e.clientX + 'px';
        document.getElementById(id).style.top = e.clientY + 'px';
    }

    render() {
        // if(this.state.selectedElement){
        //     document.getElementById('selectedElementWrapper').appendChild('<button>ff</button>')
        // }
        return (
            <div>
                <div>
                   <button
                    onClick= {this.createElement}
                   >button</button>
                   <p
                   onClick= {this.createElement}
                   >p</p>
                </div> 
                <div 
                    id= 'content'
                    onDragOver= {(e) => this.handleOnDragOver(e)}
                    onDrop= {(e) => this.handleOnDrop(e)}
                >

                </div>
                <div 
                    id = 'selectedElementButtons' 
                    style= {{top: this.state.selectedElementBoundary.top}}
                >
                    <button>a</button>
                    <button>b</button>
                    <button>c</button>
                </div>
            </div>
        )
    }
}

export default connect()(jj);
