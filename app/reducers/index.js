import { combineReducers } from 'redux'
import { items } from './items';
import { defaults } from './defaults';
import { modal } from './modal';

export const reducers = combineReducers({
  items,
  defaults,
  modal,
})
