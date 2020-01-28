import { SET_WEBSITE, SELECT_WEBSITE, ADD_WEBSITE} from './constants';

export const setWebsiteDispatcher = (payload) => ({
    type: SET_WEBSITE,
    payload
});

export const selectWebsite = (payload) => ({
    type: SELECT_WEBSITE,
    payload
});

export const addWebsite = (payload) => ({
    type: ADD_WEBSITE,
    payload
});

