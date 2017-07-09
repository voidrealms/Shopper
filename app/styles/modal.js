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

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

function getBodyArea(footer)
{
  var titleheight = (Platform.OS === 'ios') ? 64 : 54;
  var ret = window.height - (footer + titleheight + 26)
  return ret;
}

export const modal = StyleSheet.create({
  modalBackground: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: width,
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalArea: {
    backgroundColor: 'lightgray',
    width: width * .50,
    top: - 100,
    padding: 5,
    justifyContent: 'space-between',
  },
});
