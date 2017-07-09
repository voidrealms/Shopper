import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { styles } from '../styles/index';

export default class Title extends Component {

  render() {
    const {children} = this.props

    return (
      <View style={styles.titleBody}>
        <Text style={styles.titleText}>{children}</Text>
      </View>
    )
  }
}
