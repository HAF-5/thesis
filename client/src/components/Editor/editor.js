import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import $ from 'jquery';
import Fullscreen from "react-full-screen";

import SideMenu from '../SideMenu/sideMenu';
import FixedNavbar from '../Navbar/FixedNavbar';
import Navbar from './Navbar/Navbar';
import AddPageModal from './../AddPageModal/addPageModal';
import ElementCreator from './ElementCreator/elementCreator';

import { setPages, clearPages, selectPage } from './../../store/actions/pages';
import { setElements, clearElements, addElement, editElement } from './../../store/actions/elements';
import Toolbox from './../Toolbox/toolbox';

import  './Editor.css';
import Loader from '../Loader/Loader';


class Editor extends Component {

    constructor(props){
        super(props);
        this.editor = React.createRef();
        this.state = {
            addPageModalIsOpen: false,
            loading: true,
            isFull: false
        }
    }
    goFull = () => {
        this.setState({ isFull: true });
      }

    openAddPageModal = () => {
        this.setState({ addPageModalIsOpen: true });
    };

    closeAddPageModal = () => {
        this.setState({addPageModalIsOpen: false});
    }

    componentDidMount() {
        this.props.setPages(this.props.match.params.id);
    }

    handleOnDragOver(e) {
        e.preventDefault();
    }

    handleOnDrop(e) {
        let id = e.dataTransfer.getData("id");
        let element = document.getElementById(id);
        $(`#${id}`) && $(`#${id}`).removeClass('selected');
        element.style.position = "absolute";
        element.style.left = e.clientX + 'px';
        element.style.top = e.clientY + 'px';
        let stringHTML = element.outerHTML;
        this.props.editElement({ _id: id, element: stringHTML });
        console.log('gg', element)
    }

    domToString = (dom) => {
        return dom.outerHTML
    }

    createElement = (e, type) => {
        let target = e.target.cloneNode(true);
        target.style.position = "absolute" ;
        if(type === 'navbar'){
            target.style.left = '0' ;
            target.style.top = '14vh' ;
        } else {
            target.style.left = '50vw' ;
            target.style.top = '50vh' ;
        }
        let element = {
            type,
            element: this.domToString(target)
        };
        
        this.props.addElement(element);
        console.log('test create element 123456')
    }

    save = () => {
        console.log(document.getElementById(this.props.elements[this.props.elements.length-1]._id))
    }

    componentWillUnmount() {
        this.props.clearElements();
        this.props.clearPages();
    }
    //load spinner 
    sleep = milliseconds => {
      return new Promise(resolve => setTimeout(resolve, milliseconds));
    };
  
    wait = async (milliseconds = 2000) => {
      await this.sleep(milliseconds);
      this.setState({
        loading: false
      });
    };
    
    componentDidMount() {
      this.wait(2000);
      
    }

    render() {
        if (this.state.loading)  return <Loader/ > 
        return (
            
            <div>
                <AddPageModal 
                    addPageModalIsOpen= {this.state.addPageModalIsOpen}
                    website= {this.props.match.params.id}
                    closeModal= {this.closeAddPageModal}
                />
                <ToastContainer/>
                <FixedNavbar/>
                <Navbar 
                    website= {this.props.match.params.id} 
                    openAddPageModal= {this.openAddPageModal}
                    save= {this.save}
                />
                <Toolbox element= {this.state.selectedElement}/>
                <SideMenu createElement={(e, type) => this.createElement(e, type)}/> 
                {/* <ElementCreator createElement={(e) => this.createElement(e)}/> */}
                <Fullscreen 
                    enable={this.state.isFull}
                    onChange={isFull => this.setState({isFull})}
                    >
                <div className="droptarget"
                    id="editor" 
                    ref= {this.editor} 
                    onDragOver= {(e) => this.handleOnDragOver(e)}
                    onDrop= {(e) => this.handleOnDrop(e)}
                > 
                    { 
                        this.props.elements.map(element => {
                            element.element = element.element.split('>').map((val, i) => {
                                if(i === 0){
                                    val += ` id= "${element._id}"` 
                                }
                                return val;
                            }).join('>');
                            let xmlString = element.element;
                            return <div 
                                classNameName= 'selector'
                                dangerouslySetInnerHTML={{ __html: xmlString }}
                                draggable 
                                key= {element._id}
                                onDragStart= {(e) => {
                                    e.dataTransfer.setData("id", element._id);
                                    e.dataTransfer.effectAllowed = 'move';
                                }}
                                contentEditable= {true}
                                onClick= {(e) => {
                                    let id = e.target.id;
                                    if(this.state.selectedElement){
                                        $(`#${this.state.selectedElement._id}`).removeClassNAmeclassName('selected');
                                    }
                                    this.setState(() => ({selectedElement: element}), () => console.log('ll', this.state.selectedElement));
                                    $(`#${id}`).addClassNAmeclassName('selected');
                                }}
                            />
                        })  
                    }
                    {
                        !this.props.pages.length && 
                        <div classNameName= "editor_inform-page-section">
                            <h3>There is no page in your website.</h3>
                            <button 
                                classNameName= "btn editor_add-page-section_button"
                                onClick= {this.openAddPageModal}
                            >
                                <i className="fas fa-plus"></i> Add Page
                            </button>
                        </div>
                    }
                    {
                        !this.props.elements.length && 
                        this.props.pages.length &&
                        <div classNameName= "editor_inform-page-section">
                            <h3>{this.props.selectedPage.title} page is empty, create some elements.</h3>
                        </div>
                    }
                </div>
                </Fullscreen>
            </div>
          )}
}

const mapStateToProps = (state, props) => ({
  elements: state.elements,
  website: state.websites.filter(
    website => website._id === props.match.params.id
  )[0],
  pages: state.pages,
  selectedPage: state.selectedPage
});

const mapDispatchToProps = (dispatch) => ({
    setPages: (websiteId) => dispatch(setPages(websiteId)),
    setElements: (pageId) => dispatch(setElements(pageId)),
    clearElements: () => dispatch(clearElements()),
    clearPages: () => dispatch(clearPages()),
    selectPage: () => dispatch(selectPage()),
    addElement: (page) => dispatch(addElement(page)),
    editElement: (element) => dispatch(editElement(element))
});

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
