import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { isAuth, getCookie, signout } from '../auth/helpers';
import 'react-toastify/dist/ReactToastify.min.css';
import './profile.css';

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
      signout(() => {
        history.push('/');
      });
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
   
    <form className="profile-container" onSubmit={handleSubmit}>
    

      <div className="profile-continer-input">

           
      <div>
        
        <input className="profile-input-style input-email"  onChange={handelChange('email')} type="email" defaultValue={email}  placeholder="Email" disabled />
      </div>

      

            <div>
              <label className="profile-input-label" htmlFor="colFormLabel"> Name   </label>
                <input className="profile-input-style" onChange={handelChange('name')} type="text" value={name}  placeholder="Name" /> 
            </div>

            <div>
              <label className="profile-input-label input-password" htmlFor="colFormLabel">   Password   </label>
                <input className="profile-input-style"  onChange={handelChange('password')} type="password" value={password} placeholder="Choose a password" />
            </div>

            <div>
              <button className="btn btn-outline-primary btn-create">{buttonText}</button>
            </div>

            <div className="profile-ImageContiner-div">
                <img src={image} className="rounded-circle profile-image " alt="" />
                <input className="btn btn-outline-primary btn-create btn-create-UploadImage" type="file" name="file" placeholder="Upload one or more files" onChange={uploadImage} />
            </div>

      </div>
    </form>
   
  );

  return (
    <div className="profile-continer-main">  
      <ToastContainer />
  
      <form>
        <div>
        <h1 id="profile-h1-text"> Update Name or Profile Image</h1>
           {profileForm()}
        </div>
      </form>
    </div>
  );
};

export default Profile;


