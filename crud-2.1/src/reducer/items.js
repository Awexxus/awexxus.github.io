import { DATA_FETCHED_SUCCESSFULLY} from "../actions/actionTypes";
const initialState = {};

export default (state = initialState, action) =>{
    switch(action.type){
        case DATA_FETCHED_SUCCESSFULLY:
            return {...action.payload};
        default:
            return state;
    }
}