
//https://facebook.github.io/react-native/docs/asyncstorage.html
//http://stackoverflow.com/questions/34651516/how-to-store-records-in-an-array-using-asyncstorage

/*
Usage
import * as storage from './code/storage';
storage.clear();

//Alternatly make this an async function and call await
function storageTest()
{
  var key = "test";
  var arr = [1,2,3];

  storage.save(key, arr).then(function (value) {
    console.log("Save returned = " + value);
  });

  var data = storage.load(key).then(function (value) {
    console.log("Load returned = " + value);
  });

  storage.clear().then(function (value) {
    console.log("Cleared returned = " + value);
  });

}

*/
import {
  AsyncStorage,
} from 'react-native';

export async function save(key, data)
{
    try
    {
        console.log("Saving data as: " + key);
        await AsyncStorage.setItem(key, JSON.stringify(data));
        return true;
    }
    catch (error)
    {
      console.log("Data Save Error: " + error);
      return false;
    }
}

export async function load(key)
{

    try
    {
      console.log("Load data from: " + key);
      var value = await AsyncStorage.getItem(key);

      if(value !== null)
      {
        console.log("load returns data");
        var data = JSON.parse(value);
        console.log("Data loaded = " + data);
        await data;
        return data;
      }

      console.log("No data to return from: " + key);
      return null;

    }
    catch (error)
    {
      // Error retrieving data
      console.log("Data Load Error: " + error);
      return null;
    }
}

export async function remove(key)
{
    try
    {
        await AsyncStorage.remove(key);
        return true;
    }
    catch (error)
    {
      console.log("Data Remove Error: " + error);
      return false;
    }
}

export async function clear()
{
    try
    {
        await AsyncStorage.clear();

        return true;
    }
    catch (error)
    {
      console.log("Data Clear Error: " + error);
      return false;
    }
}
