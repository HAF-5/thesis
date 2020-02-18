import { ADD_ELEMENT, SELECT_ELEMENT, EDIT_ELEMENT, SET_ELEMENTS, CLEAR_ELEMENTS, DELETE_ELEMENT } from './constants';
 
export const setElementsDispatcher = (payload) => ({
    type: SET_ELEMENTS,
    payload
});

export const setElements = pageId => async dispatch => {
    try {
        let response = await fetch(`${process.env.REACT_APP_API}/api/element/${pageId}`);
        let data = await response.json();
        if(response.status == 200){
            dispatch(setElementsDispatcher(data));
        }
    } catch( err ) {
        console.log(err)
    }
}

export const clearElements = () => ({
    type: CLEAR_ELEMENTS
});

export const addElementDispatcher = (payload) => ({
    type: ADD_ELEMENT,
    payload
});

export const addElement = (element) => async (dispatch, getState) => {
    let pageId = getState().selectedPage._id;
    try {
        let response = await fetch(`${process.env.REACT_APP_API}/api/element`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ pageId, element })
          });
        let data = await response.json();
        if(response.status == 201){
            dispatch(addElementDispatcher(data));
        }
    } catch(err) {
        console.log(err);
    }
}

export const editElementDispatcher = (payload) => ({
    type: EDIT_ELEMENT,
    payload
});

export const editElement = (element) => async (dispatch, getState) => {
    let pageId = getState().selectedPage._id;
    try {
        let response = await fetch(`${process.env.REACT_APP_API}/api/element/edit/${element._id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({pageId, element})
        });
        let data = await response.json();
        if(response.status == 200){
            dispatch(editElementDispatcher(data));
        }
    } catch(err) {
        console.log(err);
    }
}

export const selectElementDispatcher = (payload) => ({
    type: SELECT_ELEMENT,
    payload
});

export const deleteElementDispatcher = (payload) => ({
    type: DELETE_ELEMENT,
    payload
});

export const deleteElement = (element) => async (dispatch, getState) => {
    let pageId = getState().selectedPage._id;
    try {
        let response = await fetch(`${process.env.REACT_APP_API}/api/element/delete/${element._id}`, 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({pageId})
        });
        if(response.status == 200){
            dispatch(deleteElementDispatcher(element._id));
        }
    } catch(err) {
        console.log(err);
    }
}