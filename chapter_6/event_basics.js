const ul = document.querySelector('ul');
// ul.remove();

const button = document.querySelector('button');
button.addEventListener('click', () => {
  //   ul.innerHTML += '<li>something new</li>';
  const li = document.createElement('li');
  li.textContent = 'something new to do';
  //   ul.append(li);
  ul.prepend(li);
  // myFunc();
});

// //function myFunc() {
// const items = document.querySelectorAll('li');
// items.forEach((item) => {
//   item.addEventListener('click', (e) => {
//     // console.log('item clicked');
//     // console.log(e);
//     // console.log(e.target);

//     // e.target.style.textDecoration = 'line-through';

//     e.stopPropagation(); // stop event bubbling

//     e.target.remove();
//   });
// });
// //}

ul.addEventListener('click', (e) => {
  //   console.log('event in ul');
  //   console.log(e.target);
  // If clicked in space between it will delete the ul, thats why if is needed
  if (e.target.tagName === 'LI') {
    e.target.remove();
  }
});

//myFunc();

//when an event occures, browser gives us parametar "e", event object, info
//about the event that happened

// I added myFunc() as fix for not removing new li elements // commented out

// When an event occurs, it becomes event target
// That event then bubbles up the DOM from event target to parent, in this
// case ul, then it fires up call back func for that event listener if
// it has it, thats called event BUBBLING

// Adding eventlisteners to new li-s and many li-s can slow down the program
// Event Delegation is useful for this
// You can target child elements with events attached to parent element
