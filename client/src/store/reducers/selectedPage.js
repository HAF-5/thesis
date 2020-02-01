import { SELECT_PAGE } from '../actions/constants';

const selectedPageReducer = (state = {}, action) => {
    switch (action.type) {
        case SELECT_PAGE: 
            return action.payload;
        default:
            return state;
    }
}

export default selectedPageReducer;
