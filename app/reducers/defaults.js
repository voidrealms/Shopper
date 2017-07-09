import { types } from '../actions/types'
import * as arrays from '../code/arrays';
import * as objects from '../code/objects';
import { store } from '../store'

const initialState = {
  list: [],
}

// Function to handle actions and update the state of the store.
// Notes:
// - The reducer must return a new state object. It must never modify
//   the state object. State objects should be treated as immutable.
// - We set \`state\` to our \`initialState\` by default. Redux will
//   call reducer() with no state on startup, and we are expected to
//   return the initial state of the app in this case.
export const defaults = (state = initialState, action) => {

console.log("Action in defaults: " + action.type);

  switch (action.type) {
    case types.ADD_DEFAULT:
      return addDefault(state, action);
    case types.DELETE_DEFAULT:
      return deleteDefault(state, action);
    case types.CLEAR_DEFAULTS:
      return clearDefaults(state,action);
    case types.TOGGLE_DEFAULT:
      return toggleDefault(state,action);
  }
  return state
}

function addDefault(state, action)
{
  console.log("Adding default: " +  action.value);

  const {list} = state;

  list.push(action.value);

  return {
    ...state,
    list: [...list],
  }
}

function deleteDefault(state, action)
{
  console.log("Deleting default: " + action.value);
  const {list} = state;
  const i = list.indexOf(action.value);
  if(!arrays.isValidIndex(i, list)) return state;

  console.log("*** Deleting " + action.value + " at " + i);

  list.splice(i,1);

  return {
    ...state,
    list: [...list],
  }
}

function clearDefaults(state, action)
{
  console.log("Clearing the default list");
  const list = [];

  return {
    ...state,
    list: [...list],
  }
}

function toggleDefault(state, action)
{

  var fullstate = store.getState();
  const {list} = state;
  const {index} = fullstate.modal;

  console.log("Toggling default: " + index);
  if(!arrays.isValidIndex(index,fullstate.items.list))
  {
    console.log("Not a valid item");
    return state;
  }

  const item = fullstate.items.list[index];
  const i = fullstate.defaults.list.indexOf(item['title'])

  if(i == -1)
  {
    console.log("Adding default: " + item['title']);
    list.push(item['title']);
  }
  else
  {
    console.log("Removing default: " + item['title']);
    list.splice(i,1);
  }

  return {
    ...state,
    list: [...list],
  }
}
