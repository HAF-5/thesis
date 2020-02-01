import { SET_PAGES, ADD_PAGE, CLEAR_PAGE, SELECT_PAGE} from './constants';
import { setElements } from './elements';

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
        // dispatch(setElements(data._id));
    }
}

export const clearPages = () => ({
    type: CLEAR_PAGE
});

export const selectPage = (payload) => ({
    type: SELECT_PAGE,
    payload
})