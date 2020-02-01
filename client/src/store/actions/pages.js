import { SET_PAGES, ADD_PAGE} from './constants';

export const setPagesDispatcher = (payload) => ({
    type: SET_PAGES,
    payload
});

export const setPages = (websiteId) => async (dispatch, getState) => {
    let response = await fetch(`${process.env.REACT_APP_API}/api/page/${websiteId}`);
    let data = await response.json();
    console.log(data)
    if(response.status == 200){
        console.log(response.status)
        dispatch(setPagesDispatcher(data));
    }
}