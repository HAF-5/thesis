import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Google from './Google';
import Facebook from './Facebook';
import { ToastContainer, toast } from 'react-toastify';
import { authenticate, isAuth, getCookie } from './helpers';
import 'react-toastify/dist/ReactToastify.min.css';
import './auth.css';

const Signin = ({ history }) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    buttonText: 'Log In'
  });

  const { email, password, buttonText } = values;
  const token = getCookie('token');
  const handelChange = (target) => (event) => {
    setValues({ ...values, [target]: event.target.value });
  };

  const informParent = (response) => {
    authenticate(response, () => {
      toast.success(`Hi ${response.user.name}, Welcome back`);
      setTimeout(() => {
        history.push('/')
      }, 5000);
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setValues({ ...values, buttonText: 'loggin in' });

      const res = await fetch(`${process.env.REACT_APP_API}/api/user/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        },
        body: JSON.stringify({ email, password })
      });

      const response = await res.json();
      if (response.error) {
        setValues({ ...values, buttonText: 'Log In' });
        toast.error(response.error);
      } else {
        authenticate(response, () => {
          setValues({ ...values, email: '', password: '', buttonText: 'logged in' });
          toast.success(`Hi ${response.user.name}, Welcome back`);
          setTimeout(() => {
            history.push('/')
          }, 5000);
        });
      }
    } catch (err) {
      setValues({ ...values, buttonText: 'Log In' });
      toast.error(err);
    }
  };

  const singinForm = () => (
    <form className="signin" onSubmit={handleSubmit}>
      <div className="form-group">
        {/* <label className="text-muted">Email</label> */}
        <input onChange={handelChange('email')} type="email" value={email} className="form-control signup-input" placeholder="Email" />
      </div>
      <div className="form-group">
        {/* <label className="text-muted">Password</label> */}
        <input onChange={handelChange('password')} type="password" value={password} className="form-control signup-input" placeholder="Type your password" />
      </div>
      <div>
        <Link to='/auth/password/forgot' className='btn btn-sm btn-outline-danger forget-psw'>Forget password ?</Link>
        <button className="btn btn-primary signin-btn">{buttonText}</button>
      </div>
    </form>
  );

  return (
    <div className="auth">
      
      <ToastContainer />
      {isAuth() ? <Redirect to="/dashboard" /> : null}
      <form className="conatiner login-form">
        <h1 className="p-5 login-title">Log In </h1>
        <div className="redirect-text">New to our website? <Link to="/Signup">Sign Up</Link></div>
        <div style={{ display: " flex" }}>
          <div className=" form-login ">
            {singinForm()}

          </div>
          <div className="devider">

          </div>
          <div className=" social-log">
            <Google informParent={informParent} />
            <Facebook informParent={informParent} />
          </div>
        </div>
        <p class="accept-terms-login">* By signing up, you agree to our <a href="#">Terms of Use</a> and to receive emails &
           updates and acknowledge that you read our< a href="#"> Privacy Policy </a> .</p>
      </form>

    </div>
  );
};

export default Signin;
