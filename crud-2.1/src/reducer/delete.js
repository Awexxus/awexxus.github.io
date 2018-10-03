import {DATA_DELETED_SUCCESSFULLY} from "../actions/actionTypes";
const initialState = {
    delete: false
};

export default (state = initialState, action) =>{
    switch(action.type){
        case DATA_DELETED_SUCCESSFULLY:
            const successState = Object.assign({}, state, {
                delete: action.delete
            })
            return successState
        default:
            return state;
    }
}