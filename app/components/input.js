import React, { Component } from 'react'
import { View,TextInput, StyleSheet } from 'react-native'

export default class Input extends Component {

  state = {
    text: '',
  }

  onChangeText = (text) => this.setState({text})

  onSubmitEditing = () => {
    const {onSubmitEditing} = this.props
    const {text} = this.state

    if (!text) return // Don't submit if empty

    onSubmitEditing(text)
    this.setState({text: ''})
  }

  render() {
    const {placeholder} = this.props
    const {text} = this.state

    return (
      <View style={styles.area}>
      <TextInput
        style={styles.input}
        value={text}
        placeholder={placeholder}
        onChangeText={this.onChangeText}
        onSubmitEditing={this.onSubmitEditing}
      />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    height: 50,
    textDecorationColor: 'white',

  },
  area: {
    backgroundColor: '#C0C0C0',
  }
})
