import { types } from '../actions/types'
import * as arrays from '../code/arrays';
import * as objects from '../code/objects';
import { store } from '../store'

const initialState = {
  list: [],
  sorted: false
}

// Function to handle actions and update the state of the store.
// Notes:
// - The reducer must return a new state object. It must never modify
//   the state object. State objects should be treated as immutable.
// - We set \`state\` to our \`initialState\` by default. Redux will
//   call reducer() with no state on startup, and we are expected to
//   return the initial state of the app in this case.
export const items = (state = initialState, action) => {

console.log("Action in items: " + action.type);

  switch (action.type) {
    case types.ADD:
      return addItem(state, action);
    case types.EDIT:
      return editItem(state, action);
    case types.DELETE:
      return deleteItem(state, action);
    case types.SORT:
      return sort(state, action);
    case types.CLEAR:
      return clear(state, action);
    case types.TOGGLE:
      return toggle(state, action);
    case types.TOGGLEALL:
      return toggleAll(state, action);
    case types.LOAD_DEFAULTS:
      return loadDefaults(state, action);

  }
  return state
}

function newItem(str)
{
  return '{"title": "' + str.trim() + '", "checked": 1 }';
}
function sort(state, action)
{
  console.log("Sorting");
  const {list, sorted} = state;
  var isSorted = false;
  if(sorted)
  {
      list.sort(arrays.dynamicSort("-title"));
      isSorted = false;
  }
  else
  {
      list.sort(arrays.dynamicSort("title"));
      isSorted = true;
  }

  return {
    ...state,
    list: [...list],
    sorted: isSorted,
  }
}

function clear(state, action)
{
  console.log("Clearing");

  const {list} = state;

  arr = [];

  return {
    ...state,
    list: [...arr],
  }

}

function addItem(state, action)
{
  //TO DO make sure we dont add duplicates
  console.log("Adding: " +  action.value);

  const {list} = state;

  //str = '{"title": "' + action.value + '", "checked": 1 }';
  if(arrays.hasItem('title', action.value, list)) return state;

  str = newItem(action.value);
  item = JSON.parse(str);
  list.push(item);
  console.log("Adding item: " + action.value);
  console.log(list);

  return {
    ...state,
    list: [...list],
  }
}

function editItem(state, action)
{
  console.log("Edit Item: " +  action.index + " to " + action.value);

  const {list} = state;
  if(!arrays.isValidIndex(action.index, list)) return state;

  list[action.index]['title'] = action.value;

  return {
    ...state,
    list: [...list],
  }
}

function deleteItem(state, action)
{
  console.log("Deleting: " +  action.index);

  const {list} = state;
  if(!arrays.isValidIndex(action.index, list)) return state;

  list.splice(action.index,1);

  return {
    ...state,
    list: [...list],
  }
}

function toggle(state, action)
{
  console.log("Toggling: " +  action.index);

  const {list} = state;
  if(!arrays.isValidIndex(action.index, list)) return state;

  if(list[action.index]['checked'] == 0)
  {
    list[action.index]['checked'] = 1;
  }
  else {
    list[action.index]['checked'] = 0;
  }

  return {
    ...state,
    list: [...list],
  }
}

function toggleAll(state, action)
{
  console.log("Toggling: All");

  const {list} = state;

  for(i = 0; i < list.length; i++)
  {
    if(list[i]['checked'] == 0)
    {
      list[i]['checked'] = 1;
    }
    else {
      list[i]['checked'] = 0;
    }
  }

  return {
    ...state,
    list: [...list],
  }
}


function setList(state, action)
{
  console.log("Setting list: " +  action.value);

  const {list} = state;
  if(!arrays.isValidIndex(action.index, list)) return state;



  return {
    ...state,
    list: [...list],
  }
}

function loadDefaults(state, action)
{
  console.log("Loading Defaults");

  var fullstate = store.getState();
  console.log("Looking at the full state...")
  console.log(fullstate.defaults);

  arr = fullstate.defaults.list;
  list = [];
  for(i = 0;i < arr.length; i++)
  {
    str = newItem(arr[i]);
    item = JSON.parse(str);
    list.push(item);

  }

  return {
    ...state,
    list: [...list],
  }
}
