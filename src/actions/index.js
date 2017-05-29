export let lastFolderID = 0

export const showPopUp = () => ({
    type: 'SHOW_POP_UP',
})

export const hidePopUp = () => ({
    type: 'HIDE_POP_UP',
})

export const addFolder = (name,isChild) => ({
    type: 'ADD_FOLDER',
    id: lastFolderID++,
    name,
    isChild
})

export const dirClick = (id) => ({
  type: 'DIR_CLICK',
  id
})

export const addSubFolder = (id, childId) => ({
  type: 'ADD_SUB_FOLDER',
    id,
    childId
})
