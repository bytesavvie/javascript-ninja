//store/SET data in local storage
localStorage.setItem('name', 'mario');
localStorage.setItem('age', 50); //turns number into string in LS

// GET data from local storage
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');

// console.log(name);
// console.log(age);

// // UPDATING data
// localStorage.setItem('name', 'luigi');
// localStorage.age = 40;

// name = localStorage.getItem('name');
// age = localStorage.getItem('age');
// console.log(name);
// console.log(age);

console.log(name, age);

//DELETING data from LocalStorage

// localStorage.removeItem('name');

//DELETE ALL data
localStorage.clear();

name = localStorage.getItem('name');
age = localStorage.getItem('age');
console.log(name, age);
