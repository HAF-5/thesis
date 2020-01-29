
import {LOGIN, LOGOUT} from './constants';


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

// export const logout = (token) => async dispatch => {
//     try{
//         let response = await fetch(`/api/user/me/logout`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'auth': token
//             }
//         });
//         if(response.status === 200){
//             dispatch(logoutDispatcher());
//             localStorage.removeItem('token');
//         }
//     } catch(err) {
//         console.log(err)
//     }
// }