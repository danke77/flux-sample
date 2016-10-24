import React, { Component, PropTypes } from 'react'
import {
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native'

export default class extends Component {

  static propTypes = {
    items: PropTypes.array,
    addItemClickFunc: PropTypes.func,
    removeItemClickFunc: PropTypes.func,
    clearItemsClickFunc: PropTypes.func
  }

  static defaultProps = {
    items: []
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.add} onPress={this.props.addItemClickFunc}>Click me to Add!</Text>
          <Text style={styles.remove} onPress={this.props.removeItemClickFunc}>Click me to Remove!</Text>
          <Text style={styles.remove} onPress={this.props.clearItemsClickFunc}>Click me to Clear!</Text>
          {
            this.props.items.map((item, index) =>
              <Text key={index} style={styles.item}>{index}: {item}</Text>
            )
          }
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    padding: 30
  },
  add: {
    fontSize: 30,
    color: 'blue',
    textAlign: 'center',
    padding: 5
  },
  remove: {
    fontSize: 30,
    color: 'red',
    textAlign: 'center',
    padding: 5
  },
  item: {
    fontSize: 20,
    color: '#222',
    padding: 3
  }
})
