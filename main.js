var DataStructures = require('algorithms').DataStructures;
var LinkedList = DataStructures.LinkedList;

var list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);

list.forEach(console.log);

list.add(5, 1);

console.log('');
list.forEach(console.log);

list.del(0);

console.log('');
list.forEach(console.log);

var node = list.getNode(2);

console.log('');
console.log(node);
