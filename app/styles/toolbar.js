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

export const toolbar = StyleSheet.create({
  toolbar: {
    backgroundColor: '#5E5E5E',
    padding: 2,
    //flex: 2,
    flexDirection: 'row',
    //justifyContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'center',
  },
  toolButton: {
    backgroundColor: '#5E5E5E',
    //height: 50,
    //width: window.width / 4,
    padding: 15,
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 1,
  },
  toolText: {
    color: 'white',
  },
});
