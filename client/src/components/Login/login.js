import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../store/actions/user';
import { Link } from 'react-router-dom';

export class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
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

    handleSubmit(e){
        e.preventDefault();
        this.props.login({
            email: this.state.email,
            password: this.state.password
        })
    }

    render() {
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <input type = 'text' placeholder = 'Email' value = {this.state.email} onChange = {this.handleEmailChange}/>
                    <input type = 'password' placeholder = 'Password' value = {this.state.password} onChange = {this.handlePasswordChange}/>
                    <button>Submit</button>
                </form>
               <Link to = '/signup'> sign up</Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    login: (user) => dispatch(login(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
