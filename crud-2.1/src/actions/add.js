import {DATA_ADDED_FAILURE, DATA_ADDED_START, DATA_ADDED_SUCCESSFULLY} from "./actionTypes";
import getItems from './index'
import addItem from "../apimethods/addItem";

export default (author, isbn, caption) => async dispatch =>{
    dispatch({
        type: DATA_ADDED_START
    });
        try {
            await addItem(author, isbn, caption);
            await dispatch({
                type: DATA_ADDED_SUCCESSFULLY,
                author: author
            });
            dispatch(getItems())
        } catch (error) {
            dispatch({
                type: DATA_ADDED_FAILURE,
                payload: error,
                error: true
            })
        }

}