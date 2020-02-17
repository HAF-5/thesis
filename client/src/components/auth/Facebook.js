import React from 'react';
import FacebookLogin from 'react-facebook-login';
import './auth.css';

const Facebook = ({ informParent }) => {
  const responseFacebook = async (response) => {
    console.log(response)
    try {
      const res = await fetch(`${process.env.REACT_APP_API}/api/user/facebook-login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userID: response.userID, accessToken: response.accessToken })
      });

      const data = await res.json();
      informParent(data);

    } catch (err) {
      console.log('Facebook signin error', err)
    }
  }

  return (
    <div>
      <FacebookLogin
        appId={`${process.env.REACT_APP_FACEBOOK_APP_ID}`}
        autoLoad={false}
        callback={(res) => responseFacebook(res)}
        fields="name,email,picture"
        icon={<div style={{ background: 'white', textAlign: 'center', marginRight: '10%', width: '20%' }}><i class="fab fa-facebook-f" style={{ marginRight: '15px', color: '#4C69BA', fontSize: '18px', margin: '0px 10px' }}></i></div>}
      />
    </div>
  )
}

export default Facebook;