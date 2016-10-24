import React, { Component } from 'react'

import MyListView from './MyListView'
import ListStore from '../stores/ListStore'
import ButtonActions from '../actions/ButtonActions'

export default class MyListViewController extends Component {

  constructor(props) {
    super(props)
    this.state = {
      items: ListStore.getAll()
    }
  }

  componentDidMount() {
    ListStore.addChangeListener(this._onListChange.bind(this))
  }

  componentWillUnmount() {
    ListStore.removeChangeListener(this._onListChange.bind(this))
  }

  _onListChange() {
    this.setState({
      items: ListStore.getAll()
    })
  }

  _onAddItemClick() {
    ButtonActions.addItem('item')
  }

  _onRemoveItemClick() {
    if(ListStore.getAll().length) {
      ButtonActions.removeItem()
    }
    else {
      alert('The list is empty!')
    }
  }

  _onClearItemsClick() {
    ButtonActions.clearItems()
  }

  render() {
    return (
      <MyListView
        items={this.state.items}
        addItemClickFunc={this._onAddItemClick}
        removeItemClickFunc={this._onRemoveItemClick}
        clearItemsClickFunc={this._onClearItemsClick}/>
    )
  }
}
