import AppDispatcher from '../dispatcher/AppDispatcher'

export const ADD_ITEM = 'ADD_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const CLEAR_ITEMS = 'CLEAR_ITEMS'

const ButtonActions = {
  addItem(item) {
    AppDispatcher.dispatch({
      actionType: ADD_ITEM,
      actionItem: item
    })
  },

  removeItem() {
    AppDispatcher.dispatch({
      actionType: REMOVE_ITEM
    })
  },

  clearItems() {
    AppDispatcher.dispatch({
      actionType: CLEAR_ITEMS
    })
  }
}

export default ButtonActions
