
import {LOGIN, LOGOUT} from './constants';

export const singupDispatcher = (user) => ({
    type: LOGIN,
    payload: user
});

export const signup = (user) => async dispatch => {
    try{
        let response = await fetch('http://localhost:8000/api/user', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if(response.status === 201){
            let result = await response.json();
            localStorage.setItem('token', result.token);
            dispatch(loginDispatcher(result.user));
        }
    } catch(err) {
        console.log(err);
    }
}

export const loginDispatcher = (user) => ({
    type: LOGIN,
    payload: user
});

export const login = (user) => async dispatch => {
    try{
        let response = await fetch('http://localhost:8000/api/user/login', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if(response.status === 200){
            let result = await response.json();
            localStorage.setItem('token', result.token);
            dispatch(loginDispatcher(result.user));
        }
    } catch(err) {
        console.log(err);
    }
}

export const me = (token) => async dispatch => {
    try{
        let response = await fetch('http://localhost:8000/api/user/me', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth': token
            }
        });
        if(response.status === 200){
            let result = await response.json();
            dispatch(loginDispatcher(result));
        }
    } catch(err) {
        console.log(err);
    }
};

export const logoutDispatcher = () => ({
    type: LOGOUT
});

export const logout = (token) => async dispatch => {
    try{
        let response = await fetch('http://localhost:8000/api/user/me/logout', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth': token
            }
        });
        if(response.status === 200){
            dispatch(logoutDispatcher());
            localStorage.removeItem('token');
        }
    } catch(err) {
        console.log(err)
    }
}