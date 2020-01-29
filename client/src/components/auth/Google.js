import React from 'react';
import GoogleLogin from 'react-google-login';

const Google = () => {
  const responseGoogle = async (response) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API}/api/user/google-login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ idToken: response.tokenId })
      });

      const response = await res.json();
    } catch (err) {

    }
  }

  return (
    <div className="pb-3">
      <GoogleLogin
        clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
        onSuccess={(res) => responseGoogle(res)}
        onFailure={(res) => responseGoogle(res)}
        render={renderProps => (
          <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="btn btn-danger btn-lg btn-block">
            <i className="fab fa-google pr-2"></i>Login with Google
          </button>
        )}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  )
}

export default Google;