import {SET_WEBSITES, SELECT_WEBSITE, ADD_WEBSITE} from '../actions/constants';

let initialState = {
    websites: ['portfilio'],
    selectedWebsite: 'portfilio'
}

const websiteReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WEBSITES:
            return {
                ...state,
                websites: action.payload,
            }
        case SELECT_WEBSITE: 
            return {
                ...state,
                selectedWebsite: action.payload
            }
        case ADD_WEBSITE:
            if(state.websites.contains(action.payload)){
                alert('sorry choose another name');
                return state;
            }
            return {
                ...state,
                websites: [...state.websites, action.payload]
            }
      default:
        return state
    }
}

export default websiteReducer;
