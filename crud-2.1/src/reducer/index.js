import { combineReducers } from 'redux'
import items from './items'
import edit from './edit'
import deleteItem from './delete'
import add from './add'
export default combineReducers({
    items,
    edit,
    deleteItem,
    add
})
