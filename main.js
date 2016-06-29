var DataStructures = require('algorithms').DataStructures;
var LinkedList = DataStructures.LinkedList;

var list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);

list.forEach(function(item){
  console.log(item);
});
