
var myObj = {};


function addProperty(obj, key) {
    obj[key] = true;
    return obj;


  // your code here
}
addProperty(myObj, 'myProperty');
console.log(myObj.myProperty);