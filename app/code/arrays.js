


/*
var People = [
    {Name: "Name", Surname: "Surname"},
    {Name:"AAA", Surname:"ZZZ"},
    {Name: "Name", Surname: "AAA"}
];
...and it will work when you do:

People.sort(dynamicSort("Name"));
People.sort(dynamicSort("Surname"));
People.sort(dynamicSort("-Surname"));
*/
export function dynamicSort(property) {
      var sortOrder = 1;
      if(property[0] === "-") {
          sortOrder = -1;
          property = property.substr(1);
      }
      return function (a,b) {
          var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
          return result * sortOrder;
      }
  }

export function isValidIndex(index = -1, arr = []) {
    if(arr == null)
    {
      console.log("warning array is null");
      return false;
    }
    console.log("Array pos at " + index + " len " + arr.length)
    if(index < 0 || index >= arr.length) false;
    return true;
}

export function hasItem(key = "key", value = "value", arr = []) {
    for(i = 0; i < arr.length; i++)
    {
      if(arr[i][key] == value) return true;
    }
    return false;
}
