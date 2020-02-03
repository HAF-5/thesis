import React, { Component } from 'react';
import { connect } from 'react-redux';

import SideMenu from '../SideMenu/sideMenu';
import FixedNavbar from '../Navbar/FixedNavbar';
import Navbar from './Navbar/Navbar';

import { setPages, clearPages, selectPage } from './../../store/actions/pages';
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
        return (
            <div>
                <FixedNavbar/>
                <Navbar/>
                {/* app.js */}
                <SideMenu /> 
                {/* sidemenu >> drogable  */}
                <div ref={this.myRef} id="editor" > 
                {/* editor >> dropable  */}
                    {
                    this.props.elements.map((element, i) => <div
                        dangerouslySetInnerHTML={{ __html: element.element }}
                        contentEditable ='true'
                    ></div>)
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
