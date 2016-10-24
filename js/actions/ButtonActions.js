import AppDispatcher from '../dispatcher/AppDispatcher'
import { ADD_ITEM, REMOVE_ITEM, CLEAR_ITEMS } from './ActionTypes'

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
