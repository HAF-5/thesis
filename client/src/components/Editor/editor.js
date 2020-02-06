import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import SideMenu from '../SideMenu/sideMenu';
import FixedNavbar from '../Navbar/FixedNavbar';
import Navbar from './Navbar/Navbar';
import AddPageModal from './../AddPageModal/addPageModal';

import { setPages, clearPages, selectPage } from './../../store/actions/pages';
import { setElements, clearElements } from './../../store/actions/elements';

import  './Editor.css';

class Editor extends Component {

    constructor(props){
        super(props);
        this.myRef = React.createRef();
        this.state = {
            addPageModalIsOpen: false
        }
    }

    openAddPageModal = () => {
        this.setState({addPageModalIsOpen: true});
    }

    closeAddPageModal = () => {
        this.setState({addPageModalIsOpen: false});
    }
    componentDidMount() {
        this.props.setPages(this.props.match.params.id);
    }

    componentWillUnmount() {
        this.props.clearElements();
        this.props.clearPages();
    }

    render() {
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
                />
                {/* app.js */}
                <SideMenu/> 
                {/* sidemenu >> drogable  */}
                <div ref={this.myRef} id="editor" > 
                {/* editor >> dropable  */}
                    {
                    this.props.elements.map((element, i) => <div
                        dangerouslySetInnerHTML={{ __html: element.element }}
                        contentEditable ='true'
                    ></div>)
                    }
                    {
                        !this.props.pages.length && 
                        <div className= "editor_inform-page-section">
                            <h3>There is no page in your website.</h3>
                            <button 
                                className= "btn editor_add-page-section_button"
                                onClick= {this.openAddPageModal}
                            >
                                <i class="fas fa-plus"></i> Add Page
                            </button>
                        </div>
                    }
                                        {
                        !this.props.elements.length && 
                        this.props.pages.length &&
                        <div className= "editor_inform-page-section">
                            <h3>{this.props.selectedPage.title} page is empty, create some elements.</h3>
                        </div>
                    }
                </div>
                {/* app.js */}
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    elements: state.elements,
    website: state.websites.filter(website => website._id === props.match.params.id)[0],
    pages: state.pages,
    selectedPage: state.selectedPage
});

const mapDispatchToProps = (dispatch) => ({
    setPages: (websiteId) => dispatch(setPages(websiteId)),
    setElements: (pageId) => dispatch(setElements(pageId)),
    clearElements: () => dispatch(clearElements()),
    clearPages: () => dispatch(clearPages()),
    selectPage: () => dispatch(selectPage())
});

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
