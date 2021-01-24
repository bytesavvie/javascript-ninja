// rest parameter

const double = (...nums) => {
  return nums.map((num) => num * 2);
};

const result = double(1, 2, 3, 4, 5, 9, 7);
console.log(result);

// spread syntax (arrays)

// const people = ['shaun', 'ryu', 'crystal'];
// console.log(...people)
const members = ['aleksa', 'nevena', ...people];
console.log(members);

// spread syntax(object)

const person = { name: 'aleksa', age: 24, job: 'mnet ninja' };
const personClone = { ...person, location: 'Serbia' };

console.log(personClone);

const people = ['ryu', 'shaun', 'ryu', 'crystal'];
