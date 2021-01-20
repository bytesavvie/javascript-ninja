class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
    this.score = 0;
  }
  login() {
    console.log(`${this.username} just logged in`);
    return this;
  }
  logout() {
    console.log(`${this.username} just loggged out`);
    return this;
  }
  incScore() {
    this.score += 1;
    console.log(`${this.username} has a score of ${this.score}`);
    return this;
  }
}

class Admin extends User {
  constructor(username, email, title) {
    super(username, email);
    this.title = title;
  }

  deleteUser(user) {
    users = users.filter((u) => {
      return u.username !== user.username;
    });
  }
}

const userOne = new User('mario', 'mario@mail.com');
const userTwo = new User('luigi', 'luigi@mail.com');
const userThree = new Admin('lexa', 'lexa@mail.com', 'black belt ninja');

let users = [userOne, userTwo, userThree];
console.log(users);
userThree.deleteUser(userTwo);
console.log(users);

console.log(userOne, userTwo);
// userOne.login();
// userTwo.login();
// userOne.logout();
// userTwo.logout();
// userOne.incScore();
// userOne.incScore();
// userTwo.incScore();
userOne.login().incScore().incScore().incScore().logout();
userTwo.login().incScore().logout();
