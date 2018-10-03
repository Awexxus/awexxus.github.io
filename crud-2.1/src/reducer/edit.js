import {DATA_UPDATED_START, DATA_UPDATED_SUCCESSFULLY} from "../actions/actionTypes";
const initialState = {
    id: false,
    edit: false
};

export default (state = initialState, action) =>{
    switch(action.type){
        case DATA_UPDATED_START:
         const newState = Object.assign({}, state, {
             id: action.id,
             edit: true
         })
            return newState;
        case DATA_UPDATED_SUCCESSFULLY:
            const succState = Object.assign({}, state, {
                id: action.id,
                edit: action.edit
            })
            return succState;
        default:
            return state;
    }
}