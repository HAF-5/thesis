import { SET_WEBSITES, SELECT_WEBSITE, ADD_WEBSITE} from './constants';

export const setWebsiteDispatcher = (payload) => ({
    type: SET_WEBSITES,
    payload
});

export const setWebsite = () => async (dispatch, getState) => {
    const id = getState().user._id;
    let response = await fetch(`${process.env.REACT_APP_API}/api/website/${id}`);
    let data = await response.json();
    if(response.status == 200){
        dispatch(setWebsiteDispatcher(data));
    }
}

export const selectWebsite = (payload) => ({
    type: SELECT_WEBSITE,
    payload
});

export const addWebsite = (payload) => ({
    type: ADD_WEBSITE,
    payload
});

