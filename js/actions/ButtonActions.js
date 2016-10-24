import AppDispatcher from '../dispatcher/AppDispatcher'

export const ADD_ITEM = 'ADD_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'

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
  }
}

export default ButtonActions
