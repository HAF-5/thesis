import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

const Facebook = ({ informParent }) => {
  const responseFacebook = async (response) => {
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
}


export default Facebook;
