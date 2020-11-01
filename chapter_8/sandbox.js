const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');
const feedback = document.querySelector('.feedback');
const pattern = /^[a-zA-Z]{6,12}$/; // making pattern avaible for both functions

form.addEventListener('submit', (e) => {
  //prevents broswers default behaviour, refresh after submit of form
  e.preventDefault();
  //   console.log(username.value);
  console.log(form.username.value);

  // testing RegEx

  const username = form.username.value;
  //   const pattern = /^[a-zA-Z]{6,12}$/;

  let result = pattern.test(username);

  if (result) {
    // console.log('regex test passed :)');
    feedback.textContent = 'regex test passed :)';
    feedback.style.color = 'green';
  } else {
    // console.log('regex test failed :(');
    feedback.textContent = 'regex test failed :(';
    feedback.style.color = 'crimson';
  }

  let resultb = username.search(pattern);
  console.log(resultb);
  // search - searches for 1st letter(index, start from 0) of pattern matches
  // -1 , if there is no patch
  // returns int of index
});

// LIVE feedback of validation, keyboard events
form.username.addEventListener('keyup', (e) => {
  if (pattern.test(e.target.value)) {
    // console.log('passed');
    form.username.setAttribute('class', 'success');
  } else {
    // console.log('failed');
    form.username.setAttribute('class', 'error');
  }
});
