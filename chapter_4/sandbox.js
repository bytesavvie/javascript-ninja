// const para = document.querySelector('body > h1:nth-child(1)');

// console.log(para);

// const errors = document.querySelectorAll('.error');

// errors.forEach((error) => {
//   console.log(error);
// });

//console.log(errors[1]);

const link = document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.thenetninja.co.uk');
link.innerText = 'The Net Ninja Website';

const mssg = document.querySelector('p');

console.log(mssg.getAttribute('class'));
// mssg.setAttribute('class', 'success');
// mssg.setAttribute('style', 'color:green;');

const title = document.querySelector('h1');

//title.setAttribute('style', 'margin: 50px');

console.log(title.style.color);

title.style.margin = '50px';
title.style.color = 'silver';
title.style.fontSize = '60px';
title.style.margin = '';

// TEST

const paras = document.querySelectorAll('p');

paras.forEach((para) => {
  if (para.textContent.includes('success')) {
    para.classList.add('success');
  }
  if (para.textContent.includes('error')) {
    para.classList.add('error');
  }
});

// const body = document.querySelectorAll('body');
// console.log(body);

// body.forEach((b) => {
//   console.log(b.innerHTML);
// });
