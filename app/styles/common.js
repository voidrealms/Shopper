/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow


 <Text style={styles.welcome}>
   Welcome to React Native!
   MAKE THIS APP
 </Text>
 <Text style={styles.instructions}>
   To get started, edit index.android.js
 </Text>
 <Text style={styles.instructions}>
   Double tap R on your keyboard to reload,{'\n'}
   Shake or press menu button for dev menu
 </Text>

 */

import { StyleSheet } from 'react-native';

export const common = StyleSheet.create({
  body: {
    backgroundColor: 'black',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  bodyLight: {
    backgroundColor: '#5E5E5E',
  },
  text: {
    color: 'white',
  },
});
