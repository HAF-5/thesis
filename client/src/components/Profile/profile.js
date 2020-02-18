import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { getCookie, signout } from '../auth/helpers';
import 'react-toastify/dist/ReactToastify.min.css';
import Dashboard from "../Dashboard/Dahboard";

const Profile = ({ history }) => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    image: '',
    loading: false,
    buttonText: 'Update'
  });

  const token = getCookie('token');

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API}/api/user/me`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const res = await response.json();
      const { name, email, image } = res;
      setValues({ ...values, name, email, image });
    } catch (err) {
      // signout(() => {
      //   history.push('/');
      // });
    }
  }

  const { name, email, password, buttonText, image } = values;

  const handelChange = (target) => (event) => {
    setValues({ ...values, [target]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setValues({ ...values, buttonText: 'Submitting' });

      const res = await fetch(`${process.env.REACT_APP_API}/api/user/update`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ name, image, password })
      });

      const response = await res.json();
      console.log(response)
      setValues({ ...values, buttonText: 'Updated' });
      toast.success('Profile updated successfully');
    } catch (err) {
      setValues({ ...values, buttonText: 'Submit' });
      toast.error('try again');
    }
  };

  const uploadImage = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0])
    data.append('upload_preset', 'haf__5');
    setValues({ ...values, loading: true });

    const res = await fetch(`${process.env.REACT_APP_CLOUDINARY}`, {
      method: 'POST',
      body: data
    });
    const file = await res.json();

    setValues({ ...values, loading: false, image: file.secure_url });
  }

  const profileForm = () => (
    <form className="form-content" onSubmit={handleSubmit}>
      <div className="form-group">
        <img src={image} className="rounded-circle" alt="" />
        <input type="file" name="file" onChange={uploadImage} />
      </div>

      <div className="form-group">
        <input onChange={handelChange('name')} type="text" value={name} className="form-control" placeholder="Name" />
      </div>

      <div className="form-group">
        <input onChange={handelChange('email')} type="email" defaultValue={email} className="form-control" placeholder="Email" disabled />
      </div>

      <div className="form-group">
        <input onChange={handelChange('password')} type="password" value={password} className="form-control" placeholder="Choose a password" />
      </div>

      <div>
        <button className="btn btn-primary signup-btn">{buttonText}</button>
      </div>
    </form>
  );

  return (
    <div className="container auth">
      <Dashboard />
      <ToastContainer />
      <form className="container">
        <div>
          <h1 className="p-5" style={{ marginBottom: "-30px" }}>profile</h1>
        </div>
        <div className="signIn">
          {profileForm()}
        </div>
      </form>
    </div>
  );
};


export default Profile;

