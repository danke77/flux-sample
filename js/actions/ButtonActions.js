import AppDispatcher from '../dispatcher/AppDispatcher'
import * as ActionTypes from './ActionTypes'

const ButtonActions = {
  addItem(item) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.ADD_ITEM,
      actionItem: item
    })
  },

  removeItem() {
    AppDispatcher.dispatch({
      actionType: ActionTypes.REMOVE_ITEM
    })
  },

  clearItems() {
    AppDispatcher.dispatch({
      actionType: ActionTypes.CLEAR_ITEMS
    })
  }
}

export default ButtonActions
