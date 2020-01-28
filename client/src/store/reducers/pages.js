import {SET_PAGES, SELECT_PAGE, ADD_PAGE} from '../actions/constants';

let initialState = {
    pages: ['index'],
    selectedPage: 'index'
}

const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PAGES:
            return {
                ...state,
                pages: action.payload,
            }
        case SELECT_PAGE: 
            return {
                ...state,
                selectedPage: action.payload
            }
        case ADD_PAGE:
            if(state.pages.contains(action.payload)){
                alert('sorry choose another name');
                return state;
            }
            return {
                ...state,
                pages: [...state.pages, action.payload]
            }
      default:
        return state
    }
}

export default pageReducer;
