import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import './auth.css'
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
    <div className="facebook-log" >
      <FacebookLogin
        appId={`${process.env.REACT_APP_FACEBOOK_APP_ID}`}
        autoLoad={false}
        callback={(res) => responseFacebook(res)}
        render={renderProps => (
          <button onClick={renderProps.onClick} className="btn btn-login ">
            <div class="buttonIcon"><div class="buttonSvgImage"></div></div>
            <span>Continue with Facebook</span>
          </button>
          
        )}
      />
    </div>
  )
}

export default Facebook;