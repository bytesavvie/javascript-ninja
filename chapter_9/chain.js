const products = [
  { name: 'gold star', price: 30 },
  { name: 'green shell', price: 10 },
  { name: 'red star', price: 40 },
  { name: 'banana star', price: 5 },
  { name: 'mushroom star', price: 50 },
];

// const filtered = products.filter((product) => product.price > 20);

// const promos = filtered.map((product) => {
//   return `the ${product.name} is ${product.price / 2} pounds`;
// });

const promos = products
  .filter((product) => product.price > 20)
  .map((product) => {
    return `the ${product.name} is ${product.price / 2} pounds`;
  });

console.log(promos);
