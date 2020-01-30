
import {LOGIN, LOGOUT} from './constants';


export const loginDispatcher = (user) => ({
    type: LOGIN,
    payload: user
});


//updated
export const me = () => async dispatch => {
    try{
        let result = JSON.parse(localStorage.getItem('user'));
        dispatch(loginDispatcher(result));
    } catch(err) {
        console.log(err);
    }
};

export const logoutDispatcher = () => ({
    type: LOGOUT
});

export const logout = (token) => async dispatch => {
    try{
        localStorage.removeItem('user');
    } catch(err) {
        console.log(err)
    }
}