import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Google from './Google';
import Facebook from './Facebook';
import { ToastContainer, toast } from 'react-toastify';
import { authenticate, isAuth } from './helpers';
import 'react-toastify/dist/ReactToastify.min.css';
import './auth.css';

const Signin = ({ history }) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    buttonText: 'Submit'
  });

  const { email, password, buttonText } = values;

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
      setValues({ ...values, buttonText: 'Submitting' });

      const res = await fetch(`${process.env.REACT_APP_API}/api/user/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
      });

      const response = await res.json();
      if (response.error) {
        setValues({ ...values, buttonText: 'Submit' });
        toast.error(response.error);
      } else {
        authenticate(response, () => {
          setValues({ ...values, email: '', password: '', buttonText: 'Submitted' });
          toast.success(`Hi ${response.user.name}, Welcome back`);
          setTimeout(() => {
            history.push('/')
          }, 5000);
        });
      }
    } catch (err) {
      setValues({ ...values, buttonText: 'Submit' });
      toast.error(err);
    }
  };

  const singinForm = () => (
    <form onSubmit={handleSubmit}>

      <div className="form-group">
        {/* <label className="text-muted">Email</label> */}
        <input onChange={handelChange('email')} type="email" value={email} className="form-control"  placeholder="Email"/>
      </div>

      <div className="form-group">
        {/* <label className="text-muted">Password</label> */}
        <input onChange={handelChange('password')} type="password" value={password} className="form-control"  placeholder="Type your password" />
      </div>

      <div>
        <button className="btn btn-primary signin-btn">{buttonText}</button>
      </div>
    </form>
  );

  return (
    <div className="container auth">
      <ToastContainer />
      {isAuth() ? <Redirect to="/dashboard" /> : null}
      <form  className="container">
        <h1 className="p-5" style={{ marginBottom: "-30px"}}>Login</h1>
        <div className="signIn">
          <div className="row social-log">
          <Google informParent={informParent} />
          <Facebook informParent={informParent} />
          </div>
          {singinForm()}
          <br />Forget your password ?
          <Link to='/auth/password/forgot' className='btn btn-sm btn-outline-danger forget-psw'>click here</Link>
        </div>
        </form> 
    </div>
  );
};

export default Signin;
