import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import jwt from 'jsonwebtoken';
import Layout from '../core/layout';
import 'react-toastify/dist/ReactToastify.min.css';

const Activate = ({ match }) => {
  const [values, setValues] = useState({
    name: '',
    token: '',
    show: true
  });

  useEffect(() => {
    let token = match.params.token;
    let { name } = jwt.decode(token);
    if (token) {
      setValues({ ...values, name, token })
    }
  }, []);

  const { name, token, show } = values;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch(`${process.env.REACT_APP_API}/account-activation`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token })
      });
      const response = await res.json();
      if (response.error) {
        toast.error(response.error);
      } else {
        setValues({ ...values, show: false });
        toast.success(response.saved);
      }
    } catch (err) {
      toast.error(err);
    }
  };

  const activationLink = () => (
    <div className="text-center">
      <h1 className="p-5">Hi {name}, Activate Your Account!</h1>
      <button className="btn btn-outline-primary" onClick={handleSubmit}>Activate Account</button>
    </div>
  )

  return (
    <Layout>
      <ToastContainer />
      <div className="col-md-6 offset-md-3">
        {activationLink()}
      </div>
    </Layout>
  );
};

export default Activate;
