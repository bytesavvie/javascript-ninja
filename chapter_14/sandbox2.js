function User(username, email) {
  this.username = username;
  this.email = email;

  //   this.login = function () {
  //     console.log(`${this.username} has logged in.`);
  //   };
}

User.prototype.login = function () {
  console.log(`${this.username} has logged in`);
  return this;
};

User.prototype.logout = function () {
  console.log(`${this.username} has logged out`);
  return this;
};

function Admin(username, email, title) {
  User.call(this, username, email);
  this.title = title;
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function () {};

const userOne = new User('lexa', 'lexa@mail.com');
const userTwo = new User('mario', 'mario@mail.com');
const userThree = new Admin('luigi', 'lugi@mail.com', 'green belt ninja');

console.log(userOne, userTwo, userThree);
userOne.login();
userOne.logout();
