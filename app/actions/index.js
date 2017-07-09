
/*

Splitting actions into multiple files
https://stackoverflow.com/questions/41336054/splitting-actions-file-into-multiple-files

Usage:
import { actions } from './actions/index';
actions.userAction1();

*/

import * as types from './types'
import * as items from './items';
import * as defaults from './defaults';
import * as modal from './modal';

export const actions = {
  types,
  items,
  defaults,
  modal,
};
