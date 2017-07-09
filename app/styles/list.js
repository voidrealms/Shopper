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

import { StyleSheet,  Dimensions, Platform } from 'react-native';
import * as window from '../code/window';

function getBodyArea(footer)
{
  var titleheight = (Platform.OS === 'ios') ? 64 : 54;
  var ret = window.height - (footer + titleheight + 26)
  return ret;
}

export const list = StyleSheet.create({
  listview: {
    backgroundColor: '#000000',
    //height: getBodyArea(35),
    flex: 20,
  },
  item: {
    marginBottom: 1,
    padding: 5,
  },
  itemON: {
    backgroundColor: '#292929',
  },
  itemOFF: {
    backgroundColor: 'black',
  },
  textON: {
    fontSize: 20,
    color: 'white',
  },
  textOFF: {
    fontSize: 20,
    color: '#8C8C8C',
  },
  defaultON: {
    fontSize: 20,
    color: 'yellow',
  },

});
