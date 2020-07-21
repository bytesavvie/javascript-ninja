// OBJECT LITERALS

const blogs = [
  {
    title: 'why mac & cheese rules',
    likes: 30,
  },
  {
    title: '10 things to make with nuggets',
    likes: 50,
  },
];

// console.log(blogs);

let user = {
  name: 'crystal',
  age: 30,
  email: 'crystal@thenetninja.co.uk',
  location: 'berlin',
  blogs: [
    {
      title: 'why mac & cheese rules',
      likes: 30,
    },
    {
      title: '10 things to make with nuggets',
      likes: 50,
    },
  ],
  login: function () {
    console.log('the user logged in');
  },
  logout: function () {
    console.log('the user logged out');
  },
  // V Shorter version, when using this,, this. wont work in methods using arrow funcions
  logBlogs() {
    // console.log(this.blogs);
    console.log('this user has written the following blogs:');
    this.blogs.forEach((blog) => {
      console.log(blog.title, blog.likes);
    });
  },
};

// console.log(user);
// console.log(user.name);

// user.age = 35;
// console.log(user.age);

// const key = 'location';

// console.log(user[key]);

// user[`name`] = 'chun-li';
// console.log(user[`name`]);

// console.log(typeof user);

// user.login();
// user.logout();
user.logBlogs();

// Creating json file from object array
const jsonFile = JSON.stringify(user);
console.log(jsonFile);
