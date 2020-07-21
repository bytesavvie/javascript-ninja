// LOOPS

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// const names = ['shaun', 'mario', 'luigi'];

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// logical operators && ||

// const password = 'p@ss1';

// if (password.length >= 12 && password.includes('@')) {
//   console.log('that password is mighty strong');
// } else if (
//   password.length >= 8 ||
//   (password.includes('@') && password.length >= 5)
// ) {
//   console.log('that password is long enough!');
// } else {
//   console.log('password is not long enough');
// }

let scores = [10, 20, 35, 0, 60, 100, 70, 30];

for (let i = 0; i < scores.length; i++) {
  if (scores[i] === 0) {
    continue;
  }

  console.log(`your score: ${scores[i]}`);

  if (scores[i] === 100) {
    console.log('congrats, you reached the top score!');
    break;
  }
}
