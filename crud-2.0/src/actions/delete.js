import {DATA_DELETED_FAILURE, DATA_DELETED_START, DATA_DELETED_SUCCESSFULLY} from "./actionTypes";
import getItems from './index'
import deleteItem from "../apimethods/deleteItem";


export default (id) => async dispatch =>{
    dispatch({
        type: DATA_DELETED_START
    });
        try {
            await deleteItem(id);
            dispatch({
                type: DATA_DELETED_SUCCESSFULLY,
                id: id
            });
            dispatch(getItems())
        } catch (error) {
            dispatch({
                type: DATA_DELETED_FAILURE,
                payload: error,
                error: true
            })
        }

}