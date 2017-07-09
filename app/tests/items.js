import * as objects from '../code/objects';
import { actions } from '../actions/index';
import { store } from '../store'


export function test()
{
  console.log("Testing the items");

  store.subscribe(storeChanged);

  store.dispatch(actions.items.addItem("test"));
  store.dispatch(actions.items.addItem("test2"));
  store.dispatch(actions.items.editItem(0,"kitty"));
  store.dispatch(actions.items.sort());
  store.dispatch(actions.items.deleteItem(0));
  store.dispatch(actions.items.toggleItem(0));
  store.dispatch(actions.items.clear());

}

function storeChanged()
{
  console.log("Test Store change...");
  var state = store.getState();
  objects.viewObject(state.items.list[0]);
}
