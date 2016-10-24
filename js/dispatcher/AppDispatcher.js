import { Dispatcher } from 'flux'
import ListStore from '../stores/ListStore'
import { ButtonActions } from '../actions/ButtonActions'
import { ADD_ITEM, REMOVE_ITEM, CLEAR_ITEMS } from '../actions/ActionTypes'

const AppDispatcher = new Dispatcher()

AppDispatcher.register((action) => {
  switch(action.actionType) {
    case ADD_ITEM:
      ListStore.addItem(action.actionItem)
      ListStore.emitChange()
      break
    case REMOVE_ITEM:
      ListStore.removeItem()
      ListStore.emitChange()
      break
    case CLEAR_ITEMS:
      ListStore.clearItems()
      ListStore.emitChange()
      break
    default:
  }
})

export default AppDispatcher
