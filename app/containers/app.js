import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet,  Alert, Modal } from 'react-native';
import { connect } from 'react-redux';
import { styles } from '../styles/index';
import Title  from '../components/title';
import Toolbar from '../components/toolbar';
import ToolButton from '../components/toolbutton';
import List from '../components/list';
import Input from '../components/input';
import * as objects from '../code/objects';
import { actions } from '../actions/index';
import { store } from '../store';

const storage = store.getState();

//Need to map the state to props
const mapStateToProps = (state) => ({
  list: state.items.list,
  animationType: state.modal.animationType,
  transparent: state.modal.transparent,
  menuVisible: state.modal.menuVisible,
  editorVisible: state.modal.editorVisible,
  index: state.modal.index,
  itemText: state.modal.itemText,
})

 class App extends Component {

   onAdd = (text) => {
     const {dispatch} = this.props;
     dispatch(actions.items.addItem(text));
   }

   onEditItem = (text) => {
     const {dispatch} = this.props;
     var fullstate = store.getState();
     dispatch(actions.items.editItem(fullstate.modal.index,text));
     dispatch(actions.modal.editorVisible(false,-1));
   }

   onDelete = () => {
     const {dispatch} = this.props;
     var fullstate = store.getState();

     dispatch(actions.items.deleteItem(fullstate.modal.index));
     dispatch(actions.modal.menuVisible(false,-1));
   }

   onPress = (index) => {
     const {dispatch} = this.props;
     dispatch(actions.items.toggleItem(index));
   }

   onLongPress = (index) => {
     const {dispatch} = this.props;
     dispatch(actions.modal.menuVisible(true, index));
   }

   onToggle = () => {
     const {dispatch} = this.props;
     dispatch(actions.items.toggleAll());
   }

   onSort = () => {
     const {dispatch} = this.props;
     dispatch(actions.items.sort());
   }

   onDefaults = () => {
     const {dispatch} = this.props;
     dispatch(actions.items.loadDefaults());
   }

   onClear = () => {
     const {dispatch} = this.props;
     dispatch(actions.items.clear());
   }

   onMenuClose = (index) => {
     const {dispatch} = this.props;

     dispatch(actions.modal.menuVisible(false,index));
   }

   onEditorClose = () => {
     const {dispatch} = this.props;
     dispatch(actions.modal.editorVisible(false));
   }

   onEdit = () => {
    const {dispatch} = this.props;
    dispatch(actions.modal.menuVisible(false));
    dispatch(actions.modal.editorVisible(true));
  }
   onToggleDefault = () => {
     const {dispatch} = this.props;
     dispatch(actions.defaults.toggleDefault());
     dispatch(actions.modal.menuVisible(false));
   }

  render() {

    const {index, itemText, list, animationType, transparent, menuVisible, editorVisible} = this.props;
    var fullstate = store.getState();
    return (

      <View style={styles.body} >
          <Title>
            Shopping app v 3
          </Title>

          <Input
            placeholder={'Type here to add an item'}
            onSubmitEditing={this.onAdd}
          />

          <Modal
            animationType={animationType}
            transparent={transparent}
            visible={menuVisible}
            onRequestClose={() => {this.onMenuClose(index)}}
          >
            <View style={styles.modalBackground} >
              <View style={styles.modalArea}>
                <ToolButton title="Edit Item" onPress={this.onEdit} />
                <ToolButton title="Delete Item" onPress={this.onDelete} />
                <ToolButton title="Toggle Default" onPress={this.onToggleDefault} />

              </View>
            </View>
          </Modal>

          <Modal
            animationType={animationType}
            transparent={transparent}
            visible={editorVisible}
            onRequestClose={() => {this.onEditorClose(index)}}
          >
            <View style={styles.modalBackground} >
              <View style={styles.modalArea}>
              <Text>Editing: {itemText}</Text>
              <Input
                value={itemText}
                onSubmitEditing={this.onEditItem}
              />

              </View>
            </View>
          </Modal>


          <View style={styles.listview}>
          <List
            list={list}
            onPressItem={this.onPress}
            onLongPress={this.onLongPress}
          />
          </View>

          <Toolbar style={styles.toolbar}>
            <ToolButton title="Toggle" onPress={this.onToggle} />
            <ToolButton title="Sort" onPress={this.onSort} />
            <ToolButton title="Defaults" onPress={this.onDefaults} />
            <ToolButton title="Clear" onPress={this.onClear} />
          </Toolbar>
        </View>


    )
  }
}

//Export the mapped object
export default connect(mapStateToProps)(App)
