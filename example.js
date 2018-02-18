const flatten = require('./src');

let arr = [['a', 'b', 'c'], ['d', ['e', 'f'], 'g'], 'h'];

console.log(flatten(arr));
