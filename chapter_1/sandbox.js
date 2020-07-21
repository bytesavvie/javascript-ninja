//                       STRINGS

// let ime = 'Aleksa';
// let prezime = 'Stojsic';
// let email = 'stojsic.aleksa@gmail.com';

// let punoIme = ime + ' ' + prezime;
// console.log(punoIme);
// console.log(punoIme.length - 1);
// console.log(punoIme.toUpperCase());

// let index = email.indexOf('@');
// console.log(index);

// Common String Methods:

// let email = 'mario@thenetninja.co.uk';

//let result = email.lastIndexOf('n');

//let result = email.slice(0, 5);

// let result = email.substr(4, 10);

//let result = email.replace('m', 'w'); // replaces only the fisrt 'm'

// let result = email.replace('n', 'w');

// console.log(result);

//                      NUMBERS

// let radius = 10;
// const pi = 3.14;

// math operators    +, -, *, /, **, %

// console.log(10 / 2);

// let result = radius % 3;

// let result = pi * radius ** 2;

// console.log(result);

// let likes = 10;

// likes += 10;
// likes -= 5;

// console.log(likes);

// NaN - not a number

// console.log(5 / 'hello');
// console.log(5 * 'hello');

// let result = 'the blog has ' + likes + ' likes';
// console.log(result);

//                      TEMPLATE STRINGS/LITERAL

// const title = 'Best Reads of 2020';
// const author = 'Mario';
// const likes = 30;

// concatenation way

// let result =
//   'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes.';
// console.log(result);

// tempalte string way

// let result = `The blog called ${title} by ${author} has ${likes} likes.`;
// console.log(result);

// creating html templates
// let html = `
//     <h2>${title}</h2>
//     <p>By ${author}</p>
//     <span>This blog has ${likes} likes</span>
// `;
// console.log(html);

//                      ARRAYS

// let ninjas = ['shaun', 'ryu', 'chun-li'];

// console.log(ninjas[0]);

// console.log(ninjas.length);

// Array Methrods

// let result = ninjas.join(' | ');

// let result = ninjas.indexOf('chun-li');

// let result = ninjas.concat(['ken', 'crystal']);

// let result = ninjas.push('ken');

// console.log(ninjas);

// result = ninjas.pop();
// console.log(ninjas);
// console.log(result);

//                      Booleans/Comparisons

// methods can retrun booleans

let email = 'stojsic.aleksa@gmail.com';
let names = ['mario', 'luigi', 'toad'];

// let result = email.includes('@');
// console.log(result);

// let result2 = email.includes('#');
// console.log(result2);

// let result3 = names.includes('luigi');
// console.log(result3);

// comparison operators
let age = 25;

console.log(age == 25);
console.log(age == 30);
console.log(age != 30);

//                      Type Conversion

let score = '100';

// score = Number(score);
// console.log(score + 1);
// console.log(typeof score);

// let result = Boolean(0);
// console.log(result, typeof result);

// let result = String(50);
// console.log(result);
// console.log(typeof result);

let result = Boolean('lalala');
console.log(result, typeof result);
