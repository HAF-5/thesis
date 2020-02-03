import React, { Component } from 'react';
import { connect } from 'react-redux';

import SideMenu from '../SideMenu/sideMenu';
import FixedNavbar from '../Navbar/FixedNavbar';
import Navbar from '../Navbar/Navbar';

import { setPages, clearPages } from './../../store/actions/pages';
import { setElements, clearElements } from './../../store/actions/elements';

import  './Editor.css';

class Editor extends Component {

    constructor(props){
        super(props);
        this.myRef = React.createRef();
    }
    componentDidMount() {
        this.props.setPages(this.props.match.params.id);
    }

    componentWillUnmount() {
        this.props.clearElements();
        this.props.clearPages();
    }

    render() {
        // this.props.elements.length === 0 && this.props.pages[0] && this.props.setElements(this.props.pages[0]._id);
        return (
            <div>
                <FixedNavbar/>
                <Navbar/>
                <div className="row">
                    <SideMenu />  
                    <div ref={this.myRef} className=" col-md-11 editor" id="editor" >
                        {/* style="position: fixed; min-height: 100vh; width: 86%; right: 0;" > */}
                        {
                        this.props.elements.map((element, i) => <div
                            dangerouslySetInnerHTML={{ __html: element.element }}
                            contentEditable ='true'
                        ></div>)
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    elements: state.elements,
    website: state.websites.filter(website => website._id === props.match.params.id)[0],
    pages: state.pages
});

const mapDispatchToProps = (dispatch) => ({
    setPages: (websiteId) => dispatch(setPages(websiteId)),
    setElements: (pageId) => dispatch(setElements(pageId)),
    clearElements: () => dispatch(clearElements()),
    clearPages: () => dispatch(clearPages())
});

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
