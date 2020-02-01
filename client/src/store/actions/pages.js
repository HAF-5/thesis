import { SET_PAGES, ADD_PAGE, CLEAR_PAGE} from './constants';

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
    }
}

export const clearPages = () => ({
    type: CLEAR_PAGE
})