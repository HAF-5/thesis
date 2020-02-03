import { SET_WEBSITES, SELECT_WEBSITE, ADD_WEBSITE} from './constants';

export const setWebsiteDispatcher = (payload) => ({
    type: SET_WEBSITES,
    payload
});

export const setWebsite = () => async (dispatch, getState) => {
    const id = getState().user._id._id;
    console.log(id)
    let response = await fetch(`${process.env.REACT_APP_API}/api/website/${id}`);
    let data = await response.json();
    console.log(data)
    if(response.status == 200){
        console.log(response.status)
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

