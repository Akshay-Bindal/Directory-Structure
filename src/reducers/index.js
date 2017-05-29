import { combineReducers } from 'redux'
import { visibilityFilter, newFolderPopUp, directories} from './visibilityFilter'

const todoApp = combineReducers({
    visibilityFilter,
    newFolderPopUp,
    directories
})

export default todoApp
