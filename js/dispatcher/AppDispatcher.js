import { Dispatcher } from 'flux'
import ListStore from '../stores/ListStore'
import { ButtonActions } from '../actions/ButtonActions'
import * as ActionTypes from '../actions/ActionTypes'

const AppDispatcher = new Dispatcher()

AppDispatcher.register((action) => {
  switch(action.actionType) {
    case ActionTypes.ADD_ITEM:
      ListStore.addItem(action.actionItem)
      ListStore.emitChange()
      break
    case ActionTypes.REMOVE_ITEM:
      ListStore.removeItem()
      ListStore.emitChange()
      break
    case ActionTypes.CLEAR_ITEMS:
      ListStore.clearItems()
      ListStore.emitChange()
      break
    default:
  }
})

export default AppDispatcher
