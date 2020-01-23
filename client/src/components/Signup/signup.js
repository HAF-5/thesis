import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from '../../store/actions/user';

export class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            name: ''
        }
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmailChange(e){
        let email = e.target.value;
        this.setState(() => ({email}));
    }

    handlePasswordChange(e){
        let password = e.target.value;
        this.setState(() => ({password}));

    }

    handleNameChange(e){
        let name = e.target.value;
        this.setState(() => ({name}));
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.signup({
            email: this.state.email,
            password: this.state.password,
            name: this.state.name
        })
    }

    render() {
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <input type = 'text' placeholder = 'Name' value = {this.state.name} onChange = {this.handleNameChange} />
                    <input type = 'text' placeholder = 'Email' value = {this.state.email} onChange = {this.handleEmailChange}/>
                    <input type = 'password' placeholder = 'Password' value = {this.state.password} onChange = {this.handlePasswordChange}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    signup: (user) => dispatch(signup(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
