import { sort } from '../utils'

const initialState = {
  selectedBox: null,
  selectedItem: null,
  items: [],
  boxes: [],
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOX':
      return { ...state, boxes: sort([...state.boxes, action.payload]) }
    case 'SELECT_BOX':
      return { ...state, selectedBox: action.payload }
    case 'ADD_ITEM':
      return { ...state, items: sort([...state.items, action.payload]) }
    case 'SELECT_ITEM':
      return { ...state, selectedItem: action.payload }
    default:
      return state
  }
}

export default rootReducer
