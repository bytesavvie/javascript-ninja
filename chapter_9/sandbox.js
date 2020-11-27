// -------- FILTER --------

// const scores = [10, 30, 15, 25, 50, 40, 5];

// // const filteredScores = scores.filter((score) => {
// //   return score > 20; // returning true of ralse, keeping true item in array
// // });

// // console.log(filteredScores);

// const users = [
//   { name: 'shaun', premium: true },
//   { name: 'yoshi', premium: false },
//   { name: 'mario', premium: false },
//   { name: 'chun-li', premium: true },
// ];

// const premiumUsers = users.filter((user) => user.premium); // shorter version
// // when returning one

// console.log(premiumUsers);

// -------- MAP --------

// cyle array and return new array

// const prices = [20, 10, 30, 25, 15, 40, 80, 5];

// const salePrices = prices.map((price) => {
//   return price / 2;
// });

// const salePrices = prices.map((price) => price / 2); //shorter
// console.log(salePrices);

// const products = [
//   { name: 'gold star', price: 20 },
//   { name: 'mushroom', price: 40 },
//   { name: 'green shells', price: 30 },
//   { name: 'banana skin', price: 10 },
//   { name: 'red shells', price: 50 },
// ];

// saleProducts = products.map((product) => {
//   if (product.price > 30) {
//     return { name: product.name, price: product.price / 2 };
//   } else {
//     return product;
//   }
// });

// console.log(saleProducts);

// -------- REDUCE --------
// doesnt return new array, but any value based on the values in the array

// const scores = [10, 20, 60, 40, 70, 90, 30];

// // accumilatior - runnin total (acc)

// const result = scores.reduce((acc, curr) => {
//   if (curr > 50) {
//     acc++;
//   }
//   return acc;
// }, 0);

// console.log(result);

// const scores = [
//   { player: 'mario', score: 50 },
//   { player: 'yoshi', score: 30 },
//   { player: 'mario', score: 70 },
//   { player: 'crtsyal', score: 60 },
//   { player: 'mario', score: 50 },
//   { player: 'mario', score: 50 },
//   { player: 'mario', score: 50 },
//   { player: 'mario', score: 50 },
//   { player: 'mario', score: 50 },
//   { player: 'mario', score: 50 },
// ];

// const marioTotal = scores.reduce((acc, curr) => {
//   if (curr.player === 'mario') {
//     acc += curr.score;
//   }
//   return acc;
// }, 0);

// console.log(marioTotal); //420 lol

// -------- FIND --------
// stops and returns the value that passes a certian condition

// const scores = [10, 5, 0, 40, 60, 10, 20, 70];

// const firstHighScore = scores.find((score) => {
//   return score > 50;
// });

// console.log(firstHighScore);

// Mutating
// push()      // Insert an element at the end
// pop()       // Remove an element from the end
// unshift()   // Inserts an element in the beginning
// shift()     // Remove first element

// Iterating
// forEach()   // Iterates an array
// filter()    // Iterates an array and result is filtered array
// map()       // Iterates an array and result is new array
// reduce()    // "Reduces" the array into single value (accumulator)

// Others
// slice()     // Returns desired elements in a new array
// concat()    // Append one or more arrays with given array

// -------- SORT --------
// changes the array its used on, doesnt create new one
// .reverse() reverses the array
// Sorting Strings

const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];

names.sort();
names.reverse();
console.log(names);

// Sorting Numbers
const scores = [10, 50, 20, 5, 35, 70, 45];

// scores.sort(); // this only checks the fist digit, 5 will come after 10
// scores.reverse();
scores.sort((a, b) => {
  return b - a;
});
console.log(scores);

// Sorting Objects
const players = [
  { name: 'mario', score: 20 },
  { name: 'luigi', score: 10 },
  { name: 'chun-li', score: 50 },
  { name: 'yoshi', score: 30 },
  { name: 'shaun', score: 70 },
];

// a and b are 2 consecutive elements inside of array, we compare a and b
// players.sort((a, b) => {
//   if (a.score > b.score) {
//     return -1;
//   } else if (b.score > a.score) {
//     return 1;
//   } else {
//     return 0;
//   }
// });

// shorter version
players.sort((a, b) => {
  return b.score - a.score;
});

console.log(players);
