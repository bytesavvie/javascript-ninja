// function greet() {
//   console.log('hello there');
// }

// //function expression
// const speak = function (name = 'luigi', time = 'night') {
//   console.log(`good ${time} ${name}!`);
// };

// // greet();
// // greet();
// // greet();

// speak('mario', 'morning');
// speak('mario');
// speak();

// const calcArea = function (radius) {
//   return round(Math.PI * radius ** 2, 1);
//   //let area = round(Math.PI * radius ** 2, 1);
//   //return area;
// };

// const area = calcArea(5);
// console.log('area is:', area);

// BEST SOLOUTION FOR ROUNDING DECIMALS (fixes the problem sometimes a decimal of 5 is rounded down instead of up)
// function round(value, decimals) {
//   return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
// }

// ARROW FUNCTIONS!!!!!!!!!!!

// const calcArea = (radius) => {
//   return round(Math.PI * radius ** 2, 1);
// };

// const calcArea = (radius) => round(Math.PI * radius ** 2, 1);

// const area = calcArea(5);
// console.log('area is:', area);

// FUNCTIONS VS METHODS

const name = 'shaun';

// functions

const greet = () => 'hello';

let resultOne = greet();
console.log(resultOne);

// methods
let resulttwo = name.toUpperCase();
console.log(resulttwo);

// CALLBACKS AND FOREACH

const myFunc = (callBackFunc) => {
  let value = 50;
  callBackFunc(value);
};

myFunc(function (value) {
  console.log(value);
});

//arrow

myFunc((value) => {
  console.log(value);
});

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chuin-li'];

// const logPerson = (person, index) => {
//   console.log(`${index} - hello ${person}`);
// };

// people.forEach((person, index) => {
//   //   console.log('something');
//   console.log(index, person);
// });

// people.forEach(logPerson);

// Example for callbacks

const ul = document.querySelector('.people');

let html = ``;

people.forEach((person) => {
  // create html template
  html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;
