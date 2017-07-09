/*
This is the main entry point for the applciation
uses Redux and persist

npm install --save redux
npm install --save react-redux
npm install --save-dev redux-devtools
npm install --save redux-persist

http://redux.js.org/
http://www.reactnativeexpress.com/redux

*/

// Import the App container component
import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import {AsyncStorage,} from 'react-native';
import { combineReducers } from 'redux'
import { store } from './store';
import App from './containers/app'
import * as objects from './code/objects';

console.log("Starting application...");

function storeChanged()
{
  console.log("The store has changed");
  var state = store.getState();
  objects.viewObject(state);
}

//subscribe to the store so we can debug changes
store.subscribe(storeChanged);

// Pass the store into the Provider

const AppWithStore = () => (
  <Provider store={store}>
  <App />
  </Provider>
)

console.log("Application started");

//Register and start the application
AppRegistry.registerComponent('shopper3', () => AppWithStore);
