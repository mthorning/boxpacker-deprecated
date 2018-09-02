const initialState = {
  items: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'EDIT_ITEM': {
      const { name, id } = action.payload
      const items = state.items.map(item => {
        if (item.id === id) {
          return { ...item, name }
        }
        return item
      })
      return { ...state, items }
    }

    case 'DELETE_ITEM': {
      return {
        ...state,
        items: [...state.items.filter(item => item.id !== action.payload)]
      }
    }

    default:
      return state
  }
}

export default rootReducer
