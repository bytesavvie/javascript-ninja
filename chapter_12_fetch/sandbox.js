// FETCH API

// fetch('todos/luigi.json')
//   .then((response) => {
//     console.log('resolved', response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log('rejected', err);
//   });

// ASYNC AND AWAIT

const getTodos = async () => {
  const response = await fetch('todos/luigi.json');

  if (response.status !== 200) {
    throw new Error('cannot fetch the data');
  }

  const data = await response.json();
  // console.log(data);
  return data;
};

getTodos()
  .then((data) => console.log('resolved', data))
  .catch((err) => console.log('rejected', err.message));
// const test = getTodos();
// console.log(test);
