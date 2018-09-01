const initialState = {
  items: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'EDIT_ITEM':
      const { name, id } = action.payload
      const items = state.items.map(item => {
        if (item.id === id) {
          return { ...item, name }
        }
        return item
      })
      return { ...state, items }
    default:
      return state
  }
}

export default rootReducer
