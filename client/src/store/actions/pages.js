import { SET_PAGES, ADD_PAGE, CLEAR_PAGE, SELECT_PAGE} from './constants';
import { setElements } from './elements';

export const selectPageDispatcher = (payload) => ({
    type: SELECT_PAGE,
    payload
});

export const selectPage = payload => dispatch => {
    dispatch(setElements(payload._id));
    dispatch(selectPageDispatcher(payload));
}

export const setPagesDispatcher = (payload) => ({
    type: SET_PAGES,
    payload
});

export const setPages = websiteId => async dispatch => {
    let response = await fetch(`${process.env.REACT_APP_API}/api/website/pages/${websiteId}`);
    let data = await response.json();
    console.log(data)
    if(response.status == 200){
        dispatch(setPagesDispatcher(data));
        console.log(data)
        data.length > 0 &&  dispatch(selectPage(data[0]));

    }
}

export const clearPages = () => ({
    type: CLEAR_PAGE
});
