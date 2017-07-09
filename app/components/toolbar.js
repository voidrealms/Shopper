import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { styles } from '../styles/index';

export default class Toolbar extends Component {

  render() {
    const {children} = this.props

    return (
      <View style={styles.toolbar}>{children}</View>
    )
  }
}
