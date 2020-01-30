import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { isAuth } from './helpers';
import 'react-toastify/dist/ReactToastify.min.css';
import './auth.css'
import Login from './Signin'

const Signup = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    buttonText: 'Register'
  });

  const { name, email, password, buttonText } = values;

  const handelChange = (target) => (event) => {
    setValues({ ...values, [target]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setValues({ ...values, buttonText: 'Submitting' });

      const res = await fetch(`${process.env.REACT_APP_API}/api/user/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password })
      });

      const response = await res.json();
      if (response.error) {
        setValues({ ...values, buttonText: 'Submit' });
        toast.error(response.error);
      } else {
        setValues({ ...values, name: '', email: '', password: '', buttonText: 'Submitted' });
        toast.success(response.message);
      }
    } catch (err) {
      setValues({ ...values, buttonText: 'Submit' });
      toast.error(err);
    }
  };

  const singupForm = () => (
    <form class ="form-content" onSubmit={handleSubmit}>
      <div className="form-group">
        {/* <label className="text-muted" >Name</label> */}
        <input onChange={handelChange('name')} type="text" value={name} className="form-control" placeholder="Name" />
      </div>

      <div className="form-group">
        {/* <label className="text-muted">Email</label> */}
        <input onChange={handelChange('email')} type="email" value={email} className="form-control" placeholder="Email"/>
      </div>

      <div className="form-group">
        {/* <label className="text-muted">Password</label> */}
        <input onChange={handelChange('password')} type="password" value={password} className="form-control" placeholder="Choose a password"/>
      </div>

      <div>
        <button className="btn btn-primary signup-btn">{buttonText}</button>
      </div>
    </form>
  );

  return (
    <div  className="container auth">
      <ToastContainer />
      {isAuth() ? <Redirect to="/signin" /> : null}
      <form  className="container">
        <div>
        <h1 className="p-5" style={{ marginBottom: "-30px"}}> Signup</h1>
        Already have an account? <Link to="Login"> Log In </Link>
        </div>
        <div className="signIn"> 
        {singupForm()}
         <p class="accept-terms">* By signing up, you agree to our <a href="#">Terms of Use</a> and to receive emails & 
           updates and acknowledge that you read our< a href="#"> Privacy Policy </a> .</p></div>
        </form> 
    </div>
  );
};

export default Signup;
