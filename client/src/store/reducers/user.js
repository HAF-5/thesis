import {LOGIN, LOGOUT} from '../actions/constants';

const userReducer = (state = {}, {type, payload}) => {
    switch (type) {
      case LOGIN:
        return {
            _id: payload
        }
       case LOGOUT: 
        return {}
      default:
        return state
    }
}

export default userReducer;
