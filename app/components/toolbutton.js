import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import { styles } from '../styles/index';

export default class ToolButton extends Component {

  render() {

    return (
      <TouchableHighlight onPress={() => {this.props.onPress()}}>
        <View style={styles.toolButton}>
          <Text style={styles.toolText}>{this.props.title}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}
