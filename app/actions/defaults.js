import { types } from './types';

/*
 * action creators
 */

 export function toggleDefault(index) {
   return { type: types.TOGGLE_DEFAULT, index: index };
 }

 export function addDefault(value) {
   return { type: types.ADD_DEFAULT, value: value };
 }

 export function deleteDefault(value) {
   return { type: types.DELETE_DEFAULT, value: value };
 }

 export function clearDefaults() {
   return { type: types.CLEAR_DEFAULTS };
 }
