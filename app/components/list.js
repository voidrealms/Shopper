import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native'
import { styles } from '../styles/index';
import { store } from '../store';

export default class List extends Component {



  getStyle(text,checked)
  {
    const fullstate = store.getState();
    if(fullstate.defaults.list.indexOf(text) == -1)
    {
      return checked === 1 ? styles.textON :  styles.textOFF;
    }
    else
    {
        return checked === 1 ? styles.defaultON :  styles.textOFF;
    }

  }

  renderItem = (item, i) => {

    const {onPressItem} = this.props
    const {onLongPress} = this.props
    const text = item['title'];
    const checked = item['checked'];

    return (
      <TouchableOpacity
        key={text}
        style={checked === 1 ? [styles.item, styles.itemON] :  [styles.item, styles.itemOFF]}
        onPress={() => onPressItem(i)}
        onLongPress={() => onLongPress(i)}

      >
        <Text
        style={this.getStyle(text,checked)}
        >
        {text}
        </Text>
      </TouchableOpacity>
    )
  }

  render() {

    const {list} = this.props
    return (
      <View>
      <ScrollView>
        {list.map(this.renderItem)}
      </ScrollView>
      </View>
    )
  }
}
