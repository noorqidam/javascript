function panggilforEach() {
  var data = ['a','b','c'];
  data.forEach(function (item,index,array){
    console.log(item)
    console.log(index)
    console.log(array)
  })
}
panggilforEach()

function panggilPerintahMap() {
 var dataKota = ['Jakarta', 'Balikpapan', 'Medan'];
 dataKota.map((item, index, array) => {
   console.log(item);
   console.log(index);
   console.log(array);
 });
}
panggilPerintahMap();