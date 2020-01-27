// import header from "../../components/Header/header";

// import {SET_ELEMENTS, SELECT_ELEMENT, ADD_ELEMENT} from '../actions/constants';

let initialState = [{
        title: 'headers',
        elements: [{
            classList: ['btn'],
            element: 'p',
            content: 'Hello World',
            style: [{
                property: 'width',
                value: '300px'
            }, {
                property: 'color',
                value: 'red'  
            }],
            createdAt: Date.now(),
            children: []
        }]
    }]

const sideMenuElementsReducer = (state = initialState, action) => {
    switch (action.type) {
        // case SET_ELEMENTS:
        //     return {
        //         ...state,
        //         pages: action.payload,
        //     }
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
