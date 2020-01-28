import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { isAuth } from './helpers';
import 'react-toastify/dist/ReactToastify.min.css';

const Signup = () => {
  const [values, setValues] = useState({
    name: 'fooz',
    email: 'reachfooz@gmail.com',
    password: '123456',
    buttonText: 'Submit'
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
      console.log(response.token)
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
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input onChange={handelChange('name')} type="text" value={name} className="form-control" />
      </div>

      <div className="form-group">
        <label className="text-muted">Email</label>
        <input onChange={handelChange('email')} type="email" value={email} className="form-control" />
      </div>

      <div className="form-group">
        <label className="text-muted">Password</label>
        <input onChange={handelChange('password')} type="text" value={password} className="form-control" />
      </div>

      <div>
        <button className="btn btn-primary">{buttonText}</button>
      </div>
    </form>
  );

  return (
    <div>
      <ToastContainer />
      {isAuth() ? <Redirect to="/signin" /> : null}
      <div className="col-md-6 offset-md-3">
        <h1 className="p-5 text-center">Signup</h1>
        {singupForm()}
      </div>
    </div>
  );
};

export default Signup;
