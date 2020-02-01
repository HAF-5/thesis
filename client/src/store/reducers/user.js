import {LOGIN, LOGOUT} from '../actions/constants';

const userReducer = (state = {}, action) => {
    switch (action.type) {
      case LOGIN:
        return action.payload
       case LOGOUT: 
        return {}
      default:
        return state
    }
}

export default userReducer;
