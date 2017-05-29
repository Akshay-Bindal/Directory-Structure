export const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}



export const newFolderPopUp = (state = false, action) => {
    switch (action.type) {
        case 'SHOW_POP_UP':
            return true;
        case 'HIDE_POP_UP':
            return false;
        default :
            return state;
    }
}

const directory = (state, action) => {
    switch (action.type) {
        case 'ADD_FOLDER':
            return {
                name: action.name,
                id: action.id,
                childFoldersIDs: [],
                childVisible: false,
                isChild: action.isChild
            }
        case 'DIR_CLICK':
            return {
                ...state,
                childVisible: !state.childVisible
            }
        case 'ADD_SUB_FOLDER':
            let stateChildIDs = state.childFoldersIDs;
            return {
                ...state,
                childFoldersIDs: [...stateChildIDs, action.childId]
            }
        default:
            return state
    }
}

export const directories = (state={}, action) => {
    const { id } = action;
    switch (action.type) {
        case 'ADD_FOLDER':
        case 'DIR_CLICK':
        case 'ADD_SUB_FOLDER':
            return {
                ...state,
                [id]: directory(state[id],action)
            }
        default :
            return state;
    }
}