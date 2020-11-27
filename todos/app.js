const addFrom = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = (todo) => {
  const html = `<li
  class="list-group-item d-flex justify-content-between align-items-center"
>
  <span>${todo}</span>
  <i class="far fa-trash-alt delete"></i>
</li>`;

  list.innerHTML += html;
};

// add todos

addFrom.addEventListener('submit', (e) => {
  e.preventDefault();
  const todo = addFrom.add.value.trim();
  //console.log(todo);

  if (todo.length) {
    generateTemplate(todo);
    addFrom.reset();
  }
});

// delete todos

list.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
});

// search todos (key up)

const filterTodos = (term) => {
  //console.log(term);
  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add('filtered'));

  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove('filtered'));
};

search.addEventListener('keyup', (e) => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});
