let numbers = Array.of(3);
console.log(numbers.length); // 1
console.log(numbers[0]); // 3


if (!Array.of) {
  Array.of = function() {
      return Array.prototype.slice.call(arguments);
  };
}



function arrayFromArgs() {
  var results = [];
  for (var i = 0; i < arguments.length; i++) {
      results.push(arguments[i]);
  }
  return results;
}
var fruits = arrayFromArgs('Apple', 'Orange', 'Banana');
console.log(fruits);


//FIND
let numbers2 = [1, 2, 3, 4, 5];

console.log(numbers2.find(e => e % 2 == 0));


//FINDINDEX
let ranks = [1, 5, 7, 8, 10, 7];
let index = ranks.findIndex(rank => rank === 7);
console.log(index);