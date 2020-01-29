import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { authenticate, isAuth } from './helpers';
import 'react-toastify/dist/ReactToastify.min.css';

const Signin = ({ history }) => {
  const [values, setValues] = useState({
    email: 'amera@gmail.com',
    password: '123456',
    buttonText: 'Submit'
  });

  const { email, password, buttonText } = values;

  const handelChange = (target) => (event) => {
    setValues({ ...values, [target]: event.target.value });
  };

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
      {/* {isAuth() ? <Redirect to="/" /> : null} */}
      <div className="col-md-6 offset-md-3">
        <h1 className="p-5 text-center">Signin</h1>
        {singinForm()}
      </div>
    </div>
  );
};

export default Signin;
