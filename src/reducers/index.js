import { combineReducers } from 'redux'
import { newFolderPopUp, directories} from './directoryStructure'

const todoApp = combineReducers({
    newFolderPopUp,
    directories
})

export default todoApp
