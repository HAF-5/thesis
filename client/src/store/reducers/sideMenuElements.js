import { SET_MENU_ELEMENTS } from './../actions/constants';

const sideMenuElementsReducer = (state = [], action) => {
    switch (action.type) {
        case SET_MENU_ELEMENTS:
            console.log(action.payload)
            return action.payload
        // case SELECT_ELEMENT: 
        //     return {
        //         ...state,
        //         selectedPage: action.payload
        //     }
        // case ADD_ELEMENT:
        //     return {
        //         ...state,
        //         pages: [...state.pages, action.payload]
        //     }
      default:
        return state
    }
}

export default sideMenuElementsReducer;
