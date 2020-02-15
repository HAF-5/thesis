import { ADD_TO_LAST_TEN_STEPS, REMOVE_FROM_LAST_TEN_STEPS } from '../actions/constants';

 
const lastTenElementsReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_LAST_TEN_STEPS:
            if(state.length === 10){
                let newState = state.splice(1, 9);
                return [
                    ...newState,
                    {
                        _id: action.payload._id,
                        type: action.payload.type,
                        element: action.payload.element,
                    }
                ];

            }
            return [
                ...state,
                {   
                    _id: action.payload._id,
                    type: action.payload.type,
                    element: action.payload.element,
                }
            ]
        case REMOVE_FROM_LAST_TEN_STEPS:
            return state.splice(0, state.length - 1);
      default:
        return state;
    }
}

export default lastTenElementsReducer;
