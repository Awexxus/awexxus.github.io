import {DATA_FETCHED_FAILURE, DATA_FETCHED_START, DATA_FETCHED_SUCCESSFULLY} from "./actionTypes";
import getItems from '../apimethods/getItems'

export default () => async dispatch =>{
    dispatch({type: DATA_FETCHED_START});
    try {
        const items = await getItems();
        dispatch({
            type: DATA_FETCHED_SUCCESSFULLY,
            payload: items
        });
        setInterval(async ()=>{
            const items = await getItems();
            dispatch({
                type: DATA_FETCHED_SUCCESSFULLY,
                payload: items
            });
        }, 30000)
    } catch (error) {
        dispatch({
            type: DATA_FETCHED_FAILURE,
            payload: error,
            error: true
        })
    }
}