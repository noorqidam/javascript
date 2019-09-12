// var array1 = [5,12,8,120,44];
// var found = array1.find(function(element){
//   return element > 100;
// })
// console.log(found)

//Array Index ==>
var array1 = [5,12,8,130,44];
function isLargeNumber(element){
  return element > 2;
}
console.log(array1.findIndex(isLargeNumber));
