const article = document.querySelector('article');

console.log(article.children);

console.log(Array.from(article.children));

// Array.from(article.children).forEach((child) => {
//   child.classList.add('article-element');
// });

const title = document.querySelector('h1');

console.log(title.parentElement); // article
console.log(title.parentElement.parentElement); // body
console.log(title.nextElementSibling); // p
console.log(title.previousElementSibling); // null

// chaining
console.log(title.nextElementSibling.parentElement.children);
