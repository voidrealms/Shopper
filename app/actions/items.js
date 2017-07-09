import { types } from './types';

/*
 * action creators
 */

 export function addItem(value) {
   return { type: types.ADD, value: value };
 }

 export function editItem(index, value) {
   return { type: types.EDIT, index: index, value: value };
 }

  export function deleteItem(index) {
    return { type: types.DELETE, index: index };
  }

  export function toggleItem(index) {
    return { type: types.TOGGLE, index: index };
  }

  export function toggleAll() {
    return { type: types.TOGGLEALL };
  }

  export function sort() {
    return { type: types.SORT }
  }

  export function clear() {
    return { type: types.CLEAR }
  }

  export function defaults() {
    return { type: types.DEFAULTS }
  }

  export function loadDefaults(value) {
    return { type: types.LOAD_DEFAULTS };
  }
