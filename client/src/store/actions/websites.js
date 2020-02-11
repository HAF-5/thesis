import { SET_WEBSITES, SELECT_WEBSITE, ADD_WEBSITE, DELETE_WEBSITE} from './constants';
import { toast } from 'react-toastify';

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

export const addWebsite = (website,cb) => async (dispatch) => {
    try{
        let response = await fetch(`${process.env.REACT_APP_API}/api/website`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(website) 
        });
        let data = await response.json()    
        if(response.status === 201){
            dispatch(addWebsiteDispatcher(data))
            toast.success("website created successfully");
            setTimeout(() => {
                cb(data._id)
              }, 5000);
            
        }else if(response.status === 400){
            toast.error("website name already exist");
        }
        
    } catch(err){
        // console.log(err)
        toast.error("something went wrong");
    }
}

    export const deleteWebsiteDispatcher = (payload) => ({
        type: DELETE_WEBSITE,
        payload
    })

    export const deleteWebsite = (id) => async (dispatch, getState) => {

        try{
            let response = await fetch(`${process.env.REACT_APP_API}/api/website/delete/${id}`, {
                method: 'GET',
                headers: {
                'Content-Type': 'application/json'
                },
            });
            let data = await response.json();
            if(response.status == 200){
                dispatch(deleteWebsiteDispatcher(data));
            }
        } catch(err) {
            console.log(err)
        }
    }

