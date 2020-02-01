import {SET_PAGES, ADD_PAGE} from '../actions/constants';

const pageReducer = (state = [], action) => {
    switch (action.type) {
        case SET_PAGES:
            return action.payload;
        case ADD_PAGE:
            if(state.pages.contains(action.payload)){
                alert('sorry choose another name');
                return state;
            }
            return [...state.pages, action.payload]
      default:
        return state
    }
}

export default pageReducer;
