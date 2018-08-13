export const addBox = box => ({ type: 'ADD_BOX', payload: box })
export const selectBox = id => ({ type: 'SELECT_BOX', payload: id })
export const addItem = item => ({ type: 'ADD_ITEM', payload: item })
export const selectItem = item => ({ type: 'SELECT_ITEM', payload: item })
