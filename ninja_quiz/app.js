const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  // Check answers:

  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  // console.log(score);
  // Show results on page:

  // scroll to top
  scrollTo(0, 0);
  // display score in span tag
  result.classList.remove('d-none');

  let output = 0;
  const timer = setInterval(() => {
    result.querySelector('span').textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});

// Fire callback function after certain amount of time
// setTimeout(() => {
//   alert('Hello ninjas!');
// }, 3000);

// Function keeps firing every amount of time
// i is for stopping the iterval
// let i = 0;
// const timer = setInterval(() => {
//   console.log('hello');
//   i++;
//   if (i === 3) {
//     clearInterval(timer);
//   }
// }, 1000);
