import {SET_ELEMENTS, SELECT_ELEMENT, ADD_ELEMENT, EDIT_ELEMENT, CLEAR_ELEMENTS} from '../actions/constants';

 
const elementReducer = (state = [], action) => {
    switch (action.type) {
        case SET_ELEMENTS:
            return action.payload; 
        case ADD_ELEMENT:
            return [
                ...state,
                {   
                    _id: action.payload._id,
                    type: action.payload.type,
                    element: action.payload.element,
                }
            ]
        case EDIT_ELEMENT: 
            return state.map(element => {
                if(element._id === action.payload._id){
                    return {
                        ...element,
                        ...action.payload
                    };
                }
                return element;
            })
        case CLEAR_ELEMENTS:
            return [];
      default:
        return state;
    }
}

export default elementReducer;
