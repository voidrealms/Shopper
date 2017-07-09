import { types } from '../actions/types'
import * as arrays from '../code/arrays';
import * as objects from '../code/objects';
import { store } from '../store'

const initialState = {
  animationType: 'none',
  transparent: true,
  menuVisible: false,
  editorVisible: false,
  index: -1,
  itemText: '',
}



// Function to handle actions and update the state of the store.
// Notes:
// - The reducer must return a new state object. It must never modify
//   the state object. State objects should be treated as immutable.
// - We set \`state\` to our \`initialState\` by default. Redux will
//   call reducer() with no state on startup, and we are expected to
//   return the initial state of the app in this case.
export const modal = (state = initialState, action) => {

console.log("Action in defaults: " + action.type);

  switch (action.type) {
    case types.EDITOR_VISIBLE:
      return editorVisible(state, action);
    case types.MENU_VISIBLE:
      return menuVisible(state, action);
  }
  return state
}

function editorVisible(state, action)
{

  var index = state.index;
  var itemText = state.itemText

  console.log("Editor visible: " +  action.value + " index: " + index + " text: " + itemText);
  objects.viewObject(state);

  return {
    ...state,
    editorVisible: action.value,
  }
}

function menuVisible(state, action)
{

  var index = action.index;
  var itemText = state.itemText;
  if(index === undefined) index = state.index;
  console.log("Menu visible: " +  action.value + " index: " + index + " text: " + itemText);

  if(action.value == true)
  {
    var fullstate = store.getState();
    //if(!arrays.isValidIndex(index,fullstate.items.list)) return state;
    itemText = fullstate.items.list[index]['title'];

    console.log("Showing menu for item: " + index + " = " + itemText);
  }
  else {
    console.log("hidding menu for item: " + index + " = " + itemText);
  }

  return {
    ...state,
    menuVisible: action.value,
    index: index,
    itemText: itemText,
  }
}
