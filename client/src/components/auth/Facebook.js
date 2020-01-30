import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

const Facebook = ({ informParent }) => {
  const responseFacebook = (response) => {
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
    <div className="pb-3">
      <FacebookLogin
        appId={`${process.env.REACT_APP_FACEBOOK_APP_ID}`}
        autoLoad={false}
        callback={(res) => responseFacebook(res)}
        render={renderProps => (
          <button onClick={renderProps.onClick} className="btn btn-primary btn-lg btn-block">
            <i className="fab fa-facebook pr-2"></i>Login with Facebook
          </button>
        )}
      />
    </div>
  )
}

export default Facebook;