import {DATA_ADDED_SUCCESSFULLY} from "../actions/actionTypes";
const initialState = {
    author: false,
    add: false
};

export default (state = initialState, action) =>{
    switch(action.type){
        case DATA_ADDED_SUCCESSFULLY:
            const successState = Object.assign({}, state, {
                author: action.author,
                add: 'success'
            })
            return successState
        default:
            return state;
    }
}