/*
function getUsers(callback){
setTimeout(() => {
  callback([
    {id: 1, name: 'John Doe', email: 'jane@mail.com'},
    {id: 1, name: 'Jane Doe', email: 'john@mail.com'},
  ])
}, 2000)
}

function findUser(username, callback){
 getUsers((users)=> {
  const user = users.find((user) => user.username === username);
  callback(user)
 })
}

findUser('Jane', console.log);
*/

function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { username: 'john', email: 'john@test.com' },
        { username: 'jane', email: 'jane@test.com' },
      ]);
    }, 1000);
  });
}

function onFulfilled(users) {
  console.log(users);
}

const promise = getUsers();
promise.then(onFulfilled);



//encadeamento de promessas
let p = new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve(10);
  }, 3 * 100);
});

p.then((result) => {
  console.log(result); // 10
  return result * 2;
})

p.then((result) => {
  console.log(result); // 10
  return result * 3;
})

p.then((result) => {
  console.log(result); // 10
  return result * 4;
});

//promise all
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
      console.log('The first promise has resolved');
      resolve(10);
  }, 1 * 1000);

});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
      console.log('The second promise has rejected');
      reject('Failed');
  }, 2 * 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
      console.log('The third promise has resolved');
      resolve(30);
  }, 3 * 1000);
});


Promise.all([p1, p2, p3])
  .then(console.log) // never execute
  .catch(console.log);


  //exceptions
  let authorized = false;

function getUserById(id) {
    return new Promise((resolve, reject) => {
        if (!authorized) {
            reject('Unauthorized access to the user data');
        }

        resolve({
            id: id,
            username: 'admin'
        });
    });
}

try {
    getUserById(10)
        .then(user => console.log(user.username))
        .catch(err => console.log(`Caught by .catch ${err}`));
} catch (error) {
    console.log(`Caught by try/catch ${error}`);
}