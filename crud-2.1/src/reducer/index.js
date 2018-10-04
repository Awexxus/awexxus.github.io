import { combineReducers } from 'redux';
import items from './items';
import edit from './edit';
import deleteItem from './delete';
import add from './add';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    items,
    edit,
    deleteItem,
    add,
    form: formReducer
})
