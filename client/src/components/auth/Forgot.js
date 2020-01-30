import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Forgot = () => {
  const [values, setValues] = useState({
    email: '',
    buttonText: 'Submit'
  });

  const { email, buttonText } = values;

  const handelChange = (target) => (event) => {
    setValues({ ...values, [target]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setValues({ ...values, buttonText: 'Submitting' });

      const res = await fetch(`${process.env.REACT_APP_API}/api/user/forgot-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email })
      });

      const response = await res.json();
      if (response.error) {
        setValues({ ...values, buttonText: 'Submit' });
        toast.error(response.error);
      } else {
        setValues({ ...values, email: '', password: '', buttonText: 'Submitted' });
        toast.success(response.message);
      }
    } catch (err) {
      setValues({ ...values, buttonText: 'Submit' });
      toast.error(err);
    }
  };

  const passwordForgotForm = () => (
    <form onSubmit={handleSubmit}>

      <div className="form-group">
        <label className="text-muted">Email</label>
        <input onChange={handelChange('email')} type="email" value={email} className="form-control" />
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
        <h1 className="p-5 text-center">Forgot password</h1>
        {passwordForgotForm()}
      </div>
    </div>
  );
};

export default Forgot;
