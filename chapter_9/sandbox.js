const scores = [10, 30, 15, 25, 50, 40, 5];

// const filteredScores = scores.filter((score) => {
//   return score > 20; // returning true of ralse, keeping true item in array
// });

// console.log(filteredScores);

const users = [
  { name: 'shaun', premium: true },
  { name: 'yoshi', premium: false },
  { name: 'mario', premium: false },
  { name: 'chun-li', premium: true },
];

const premiumUsers = users.filter((user) => user.premium); // shorter version
// when returning one

console.log(premiumUsers);
