const namesArray = ['ryu', 'shun-li', 'ryu', 'shaun'];
console.log(namesArray);

// namesSet = new Set(namesArray);
// console.log(namesSet);

// const uniqueNames = [...namesSet];
const uniqueNames = [...new Set(namesArray)];
console.log(uniqueNames);

const ages = new Set();
ages.add(20).add(24).add(8);
ages.add(24);
ages.delete(20);
console.log(ages.size);

console.log(ages);
console.log(ages.has(8), ages.has(20));

ages.clear();
console.log(ages);

const ninjas = new Set([
  { name: 'shaun', age: 30 },
  { name: 'crystal', age: 29 },
  { name: 'chaun-li', age: 32 }
]);

ninjas.forEach((ninja) => {
  console.log(ninja.name, ninja.age);
});
