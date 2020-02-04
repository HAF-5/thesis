import { SET_WEBSITES, SELECT_WEBSITE, ADD_WEBSITE} from './constants';

export const setWebsiteDispatcher = (payload) => ({
    type: SET_WEBSITES,
    payload
});

export const setWebsite = () => async (dispatch, getState) => {
    try{
        const id = getState().user._id;
        let response = await fetch(`${process.env.REACT_APP_API}/api/website/${id}`);
        let data = await response.json();
        if(response.status == 200){
            dispatch(setWebsiteDispatcher(data));
        }
    } catch(err) {
        console.log(err)
    }
}

export const selectWebsite = (payload) => ({
    type: SELECT_WEBSITE,
    payload
});

export const addWebsiteDispatcher = (payload) => ({
    type: ADD_WEBSITE,
    payload
});

