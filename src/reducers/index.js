import testData from '../../test-data'

const initialState = {
  selectedBox: null,
  selectedItem: null,
  items: testData.items,
  boxes: testData.boxes,
}

const rootReducer = (state = initialState, action) => {
  switch (action) {
    case 'ADD_BOX':
      return { ...state, boxes: [...state.boxes, action.payload] }
    case 'SELECT_BOX':
      return { ...state, selectedBox: action.payload }
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, action.payload] }
    case 'SELECT_ITEM':
      return { ...state, selectedItem: action.payload }
    default:
      return state
  }
}

export default rootReducer
