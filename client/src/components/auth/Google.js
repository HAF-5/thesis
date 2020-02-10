import React from 'react';
import GoogleLogin from 'react-google-login';

import './auth.css'

const Google = ({ informParent }) => {
  const responseGoogle = async (response) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API}/api/user/google-login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ idToken: response.tokenId })
      });

      const data = await res.json();
      informParent(data);

    } catch (err) {
      console.log('Google signin error', err)
    }
  }

  return (
    <div>
      <GoogleLogin
        clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
        onSuccess={(res) => responseGoogle(res)}
        onFailure={(res) => responseGoogle(res)}
        render={renderProps => (
          <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="btn btn-loginn">
            <div class="buttonIconn"><div class="buttonSvgImagee"></div></div>
            <span>Continue with Google</span>
          </button>
        )}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  )
}

export default Google;