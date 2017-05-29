import { combineReducers } from 'redux'
import { newFolderPopUp, directories} from './directoryStructure'

const todoApp = combineReducers({
    visibilityFilter,
    newFolderPopUp,
    directories
})

export default todoApp
