import {DATA_UPDATED_FAILURE, DATA_UPDATED_START, DATA_UPDATED_SUCCESSFULLY} from "./actionTypes";
import getItems from './index'
import editItem from "../apimethods/editItem";


export default (id, author, isbn, caption) => async dispatch =>{
    dispatch({
        type: DATA_UPDATED_START,
        id: id
    });
    if( author, isbn, caption) {
        try {
            await editItem(id, author, isbn, caption);
            dispatch({
                type: DATA_UPDATED_SUCCESSFULLY,
                id: id
            });
            dispatch(getItems());
        } catch (error) {
            dispatch({
                type: DATA_UPDATED_FAILURE,
                payload: error,
                error: true
            })
        }
    }
}