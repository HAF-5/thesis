import cookie from 'js-cookie';

// set in cookie
export const setCookie = (key, value) => {
  if (window) {
    cookie.set(key, value, {
      expires: 1
    });
  };
};

// remove from cookie
export const removeCookie = (key) => {
  if (window) {
    cookie.remove(key, {
      expires: 1
    });
  };
};

// get from cookie such as token
export const getCookie = (key, value) => {
  if (window) {
    return cookie.get(key);
  };
};

//set in localstorage
export const setLocalStorge = (key, value) => {
  if (window) {
    localStorage.setItem(key, JSON.stringify(value));
  };
};

// remove from localstorge
export const removeLocalStorge = (key) => {
  if (window) {
    localStorage.removeItem(key);
  };
};

// authenticate user by passing data to cookie & localstorage during saving
export const authenticate = (response, next) => {
  setCookie('token', response.token);
  setLocalStorge('user', response.user);
  next();
};

// access user from localstorage
export const isAuth = () => {
  if (window) {
    const cookieChecked = getCookie('token');
    if (cookieChecked) {
      if (localStorage.getItem('user')) {
        return JSON.parse(localStorage.getItem('user'));
      } else {
        return false;
      };
    };
  };
};

// signout
export const signout = (next) => {
  removeCookie('token');
  removeLocalStorge('user');
  next();
};