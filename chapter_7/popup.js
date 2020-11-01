const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
// const close = document.querySelector('.popup-close');

button.addEventListener('click', () => {
  popup.style.display = 'block';
});

// close.addEventListener('click', () => {
//   popup.style.display = 'none';
// });

popup.addEventListener('click', (e) => {
  //   console.log(
  //     e.target.parentNode.className,
  //     e.target.parentNode.parentNode.className
  //   );
  if (
    e.target.className === 'popup-close' ||
    (e.target.parentNode.parentNode.className ||
      e.target.parentNode.className) === ''
  ) {
    popup.style.display = 'none';
  }
});

// Fixed a bug where clicking on popup closed the popup still
// Look for if there are no classes above the popup-wrapper, then only close
// the popup, assuming the body doesnt have a class

// removed event listener for X, and inherited it into popup eventListen
