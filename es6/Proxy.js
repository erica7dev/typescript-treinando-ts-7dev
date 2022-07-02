const user = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
}

const handler = {
  get(target, property) {
      console.log(`Property ${property} has been read.`);
      return target[property];
  }
}

const proxyUser = new Proxy(user, handler);
console.log(proxyUser.firstName);
console.log(proxyUser.lastName);


//Reflect 
class Person {
  constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
  }
  get fullName() {
      return `${this.firstName} ${this.lastName}`;
  }
};

let args = ['John', 'Doe'];

let john = Reflect.construct(
  Person,
  args
);

console.log(john instanceof Person);
console.log(john.fullName); // John Doe
