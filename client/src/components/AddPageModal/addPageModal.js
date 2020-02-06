import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';

import { addPage } from './../../store/actions/pages';
import './addPageModal.css';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      minWidth                 : '60vw',
      padding               : '50px 20px'
    }
  };

class AddPageModal extends Component {

    state = {
        title: ''
    }

    onTitleChangeHandler = (e) => {
        let title = e.target.value;
        this.setState(() => ({title}));
    }

    onSubmit = (e) => {
        e.preventDefault();
        let title = this.state.title;
        let website = this.props.website;
        this.props.addPage(title, website);
        this.props.closeModal();
    }

    render() {
        return (
            <Modal
                isOpen={this.props.addPageModalIsOpen}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Add Page"
                >
        
                <h2 
                    className= 'add-page-modal_title'
                    ref={subtitle => this.subtitle = subtitle}
                >Add Page to your website</h2>
                <h3
                    className= 'add-page-modal_subtitle'
                >Please Enter Page Name. </h3>
                <form 
                    onSubmit= {(e) => {
                        this.onSubmit(e);
                        this.setState(()=>({title: ''}));
                    }}
                    className= 'add-page-modal_form'
                >
                    <input 
                        onChange= {this.onTitleChangeHandler}
                        value= {this.state.title}
                        className= 'add-page-modal_input'
                    />
                    <div className= 'add-page-modal_buttons' >
                        <button 
                            className= 'add-page-modal_button btn' 
                            type = 'submit'
                            disabled = {this.state.title.length < 1}
                        >Add</button>
                        <button className= 'add-page-modal_button btn' onClick={() => {
                            this.setState(()=>({title: ''}))
                            this.props.closeModal();
                        }}>close</button>
                    </div>
                </form>
            </Modal>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addPage: (title, website) => dispatch(addPage(title, website))
})

export default connect(null, mapDispatchToProps)(AddPageModal)