// import header from "../../components/Header/header";

// import {SET_ELEMENTS, SELECT_ELEMENT, ADD_ELEMENT} from '../actions/constants';

// let initialState = [{
//         title: 'headers',
//         elements: [{
//             classList: ['btn', 'btn-info'],
//             element: 'p',
//             content: 'Hello World',
//             style: [{
//                 property: 'width',
//                 value: '300px'
//             }, {
//                 property: 'color',
//                 value: 'red'  
//             }],
//             createdAt: Date.now(),
//             children: []
//         },{
//             classList: ['btn'],
//             element: 'p',
//             content: 'Hello World',
//             style: [{
//                 property: 'width',
//                 value: '300px'
//             }, {
//                 property: 'color',
//                 value: 'red'  
//             }],
//             createdAt: Date.now(),
//             children: [{
//                 classList: ['btn'],
//                 element: 'p',
//                 content: 'Hello World',
//                 style: [{
//                     property: 'width',
//                     value: '300px'
//                 }, {
//                     property: 'color',
//                     value: 'red'  
//                 }],
//                 createdAt: Date.now(),
//                 children: []
//             }]
//         }]
//     }]
// import { elements } from './../../sideMenuElements';
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
