import { ADD_TO_LAST_TEN_STEPS, REMOVE_FROM_LAST_TEN_STEPS} from './constants';
import { editElementDispatcher } from './../actions/elements';

export const addToLastTenSteps = (payload) => ({
    type: ADD_TO_LAST_TEN_STEPS,
    payload
});

export const removeFromLastTenStepsDispatcher = () => ({
    type: REMOVE_FROM_LAST_TEN_STEPS
});

export const removeFromLastTenSteps = (lastStep) => async (dispatch, getState) => {
    let pageId = getState().selectedPage._id;
    try {
        let response = await fetch(`${process.env.REACT_APP_API}/api/element/edit/${lastStep._id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({pageId, element: lastStep})
        });
        let data = await response.json();
        if(response.status == 200){
            dispatch(removeFromLastTenStepsDispatcher());
            dispatch(editElementDispatcher(data));
        }
    } catch(err) {
        console.log(err);
    }
}