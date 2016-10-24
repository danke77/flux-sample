import { EventEmitter } from 'events'
import assign from 'object-assign'

const ListStore = assign({}, EventEmitter.prototype,
  {
    items: [],

    getAll() {
      return this.items
    },

    addItem(item) {
      this.items.push(item)
    },

    removeItem() {
      this.items.pop()
    },

    emitChange() {
      this.emit('change')
    },

    addChangeListener(callback) {
      this.on('change', callback)
    },

    removeChangeListener(callback) {
      this.removeListener('change', callback)
    }
  }
)

export default ListStore
