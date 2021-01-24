const list = document.querySelector('ul');
const form = document.querySelector('form');
const button = document.querySelector('button');

const addRecipe = (recipe, id) => {
  let time = recipe.created_at.toDate();
  let html = `
    <li data-id="${id}">
        <div>${recipe.title}</div>
        <div>${time}</div>
        <button class="btn btn-danger my-2">Delete</button>
    </li>
    `;

  list.innerHTML += html;
};

// get documents

// REAL TIME

const deleteRecipe = (id) => {
  const recipes = document.querySelectorAll('li');
  recipes.forEach((recipe) => {
    if (recipe.getAttribute('data-id') === id) {
      recipe.remove();
    }
  });
};

const unsub = db.collection('recipes').onSnapshot((snapshot) => {
  snapshot.docChanges().forEach((change) => {
    const doc = change.doc;
    console.log(doc);
    if (change.type === 'added') {
      addRecipe(doc.data(), doc.id);
    } else if (change.type === 'removed') {
      deleteRecipe(doc.id);
    }
  });
});

// db.collection('recipes')
//   .get()
//   .then((snapshot) => {
//     snapshot.docs.forEach((doc) => {
//       addRecipe(doc.data(), doc.id);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//add documents
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const now = new Date();
  const recipe = {
    title: form.recipe.value,
    created_at: firebase.firestore.Timestamp.fromDate(now)
  };

  db.collection('recipes')
    .add(recipe)
    .then(() => {
      console.log('recipe added');
    })
    .catch((error) => {
      console.log('there has been an error', error);
    });
});

// Deleting data / event delegation

list.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const id = e.target.parentElement.getAttribute('data-id');
    db.collection('recipes')
      .doc(id)
      .delete()
      .then(() => {
        console.log('recipe deleted');
      });
  }
});

button.addEventListener('click', () => {
  unsub();
  console.log('unsubed from changes');
});
