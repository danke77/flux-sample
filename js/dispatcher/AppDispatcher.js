import { Dispatcher } from 'flux'
import ListStore from '../stores/ListStore'
import { ButtonActions, ADD_ITEM, REMOVE_ITEM } from '../actions/ButtonActions'

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
    default:
  }
})

export default AppDispatcher
