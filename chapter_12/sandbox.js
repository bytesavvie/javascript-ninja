// console.log(1);
// console.log(2);

// setTimeout(() => {
//   console.log('callback function fired');
// });

// console.log(3);
// console.log(4);

const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
      //console.log(request, request.readyState);
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject('error getting resource');
      }
    });

    // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    // request.send();
    request.open('GET', resource);
    request.send();
  });
};

getTodos('todos/luigi.json')
  .then((data) => console.log('promise resloved:', data))
  .catch((err) => {
    console.log('promise rejected:', err);
  });

// console.log(1);
// console.log(2);

// getTodos('todos/shaun.json', (err, data) => {
//   console.log(data);
//   getTodos('todos/luigi.json', (err, data) => {
//     console.log(data);
//     getTodos('todos/mario.json', (err, data) => {
//       console.log(data);
//     });
//   });
// ERROR CHEK
// console.log('callback fired');
// if (err) {
//   console.log(err);
// } else {
//   console.log(data);
// }
// console.log(3);
// console.log(4);

// BITNO
const getSomething = () => {
  return new Promise((resolve, reject) => {
    // fetch something
    // resolve('some data');
    reject('some error');
  });
};

// getSomething().then((data) => {
//   console.log(data);
// });

// BITNO
getSomething()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
