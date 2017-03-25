import nth = require("lodash.nth");

var array = ['a', 'b', 'c', 'd'];
 
nth(array, 1);
// => 'b'
 
nth(array, -2);
// => 'c';