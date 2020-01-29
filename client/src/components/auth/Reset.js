import React, { useState, useEffect } from 'react';
import jwt from 'jsonwebtoken';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Reset = ({ match, history }) => {
  const [values, setValues] = useState({
    name: '',
    token: '',
    newPassword: '',
    buttonText: 'Reset password'
  });

  useEffect(() => {
    let token = match.params.token;
    let { name } = jwt.decode(token);
    if (token) {
      setValues({ ...values, name, token })
    }
  }, [])

  const { name, token, newPassword, buttonText } = values;

  const handelChange = (event) => {
    setValues({ ...values, newPassword: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setValues({ ...values, buttonText: 'Submitting' });

      const res = await fetch(`${process.env.REACT_APP_API}/api/user/reset-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newPassword, resetPasswordLink: token })
      });

      const response = await res.json();
      if (response.error) {
        setValues({ ...values, buttonText: 'Submit' });
        toast.error(response.error);
      } else {
        setValues({ ...values, email: '', password: '', buttonText: 'Done' });
        toast.success(response.message);
        setTimeout(() => {
          history.push('/login')
        }, 5000);
      }
    } catch (err) {
      setValues({ ...values, buttonText: 'Submit' });
      toast.error(err);
    }
  };

  const passwordResettForm = () => (
    <form onSubmit={handleSubmit}>

      <div className="form-group">
        <label className="text-muted">Password</label>
        <input onChange={handelChange} type="password" value={newPassword} placeholder="Type new password" required className="form-control" />
      </div>

      <div>
        <button className="btn btn-primary">{buttonText}</button>
      </div>
    </form>
  );

  return (
    <div>
      <ToastContainer />
      <div className="col-md-6 offset-md-3">
        <h1 className="p-5 text-center">Hi {name}, Type your new password</h1>
        {passwordResettForm()}
      </div>
    </div>
  );
};

export default Reset;
