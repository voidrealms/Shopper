import * as objects from '../code/objects';
import { actions } from '../actions/index';
import { store } from '../store'


export function test()
{
  console.log("Testing the defaults");

  store.subscribe(storeChanged);

  store.dispatch(actions.items.addItem("aaa"));
  store.dispatch(actions.items.addItem("bbb"));
  store.dispatch(actions.items.addItem("ccc"));
  store.dispatch(actions.items.addItem("ddd"));

  store.dispatch(actions.defaults.addDefault("default 1"));
  store.dispatch(actions.defaults.addDefault("default 2"));
  store.dispatch(actions.defaults.addDefault("default 3"));
  store.dispatch(actions.defaults.deleteDefault("default 2"));


  store.dispatch(actions.items.loadDefaults());
  store.dispatch(actions.items.addItem("test"));

  store.dispatch(actions.defaults.clearDefaults());


}

function storeChanged()
{
  console.log("Test Store change...");
  var state = store.getState();
  objects.viewObject(state.items.list[0]);

  console.log("Items in list");
  for(i = 0; i < state.items.list.length; i ++)
  {
    console.log(state.items.list[i]['title']);
  }

  console.log("Items in default");
  for(i = 0; i < state.defaults.list.length; i ++)
  {
    console.log(state.defaults.list[i]);
  }

}
