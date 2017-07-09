/*
The store used buy the application
*/
import { createStore } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import {AsyncStorage,} from 'react-native';
import { reducers } from './reducers/index';

// Add the autoRehydrate middleware to your redux store
export const store = createStore(reducers, undefined, autoRehydrate())

// Enable persistence
persistStore(store, {storage: AsyncStorage});
