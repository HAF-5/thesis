import {SET_WEBSITES, SELECT_WEBSITE, ADD_WEBSITE, DELETE_WEBSITE} from '../actions/constants';

const websiteReducer = (state = [], action) => {
    switch (action.type) {
        case SET_WEBSITES:
            return action.payload;
        // case SELECT_WEBSITE: 
        //     return state;
        case ADD_WEBSITE:
            return [
                ...state,
                action.payload
            ]
        case DELETE_WEBSITE:
            return state.filter((website) => website._id !== action.payload._id);
               
      default:
        return state;
    }
}

export default websiteReducer;
