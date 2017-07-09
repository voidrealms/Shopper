import { types } from './types';

/*
 * action creators
 */

 export function editorVisible(value) {
   return { type: types.EDITOR_VISIBLE, value: value };
 }

 export function menuVisible(value, index) {
   return { type: types.MENU_VISIBLE, value: value, index: index };
 }
