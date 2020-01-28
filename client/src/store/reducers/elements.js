import {SET_ELEMENTS, SELECT_ELEMENT, ADD_ELEMENT} from '../actions/constants';

let initialState = {
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
        children: [{
            classList: [],
            element: 'p',
            content: ' !',
            style: []
        }]
    },
    {
        classList: ['btn', 'btn-info'],
        element: 'button',
        content: 'click me',
        style: [],
        createdAt: Date.now(),
        children: []
    }],
    selectedElement: {
        classList: ['btn'],
        element: 'p',
        content: 'Hello World',
        style: [{
            property: 'width',
            value: '300px'
        }],
        createdAt: Date.now(),
        children: [{
            classList: [],
            element: 'p',
            content: ' !',
            style: []
        }]
    }
}

const elementReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ELEMENTS:
            return {
                ...state,
                pages: action.payload,
            }
        case SELECT_ELEMENT: 
            return {
                ...state,
                selectedPage: action.payload
            }
        case ADD_ELEMENT:
            return {
                ...state,
                pages: [...state.pages, action.payload]
            }
      default:
        return state
    }
}

export default elementReducer;
