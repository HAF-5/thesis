import { toast } from 'react-toastify';
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

export const addPageDispatcher = (payload) => ({
    type: ADD_PAGE,
    payload
});

export const addPage = (title, website) => async dispatch => {
    console.log(title, website)
    try {
        let response = await fetch(`${process.env.REACT_APP_API}/api/page`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title, 
                website: website
            })
        });
        let data = await response.json();
        if(response.status == 201){
            dispatch(addPageDispatcher(data));
            dispatch(selectPage(data));
            toast.success(`Page ${data.title}, Added Successfuly`);
        } else if(response.status === 200){
            toast.error('this page name already exists please pick another name')
        }
    } catch(err) {
        toast.error('Some thing went wrong');
    }
}


export const setPagesDispatcher = (payload) => ({
    type: SET_PAGES,
    payload
});

export const setPages = websiteId => async dispatch => {
    let response = await fetch(`${process.env.REACT_APP_API}/api/website/pages/${websiteId}`);
    let data = await response.json();
    if(response.status == 200){
        dispatch(setPagesDispatcher(data));
        console.log(data)
        data.length > 0 &&  dispatch(selectPage(data[0]));

    }
}

export const clearPages = () => ({
    type: CLEAR_PAGE
});
