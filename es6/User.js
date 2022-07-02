class User {
  static count = 0;
	static getCount() {
		return Item.count;
	}
  
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getNome(){
    return this.name;
  }

  setNome(name){
    name = name.trim();
    if(name ===''){
      throw new Error('Nome não pode ser vazio');
    }
    this.name = name
  }

  static createGender(gender){
    let name = gender == 'male'? 'John Doe':'Jane Doe';
    return new User(name);
  }
}

let user = new User('João', 23);
console.log(user.getNome());
user.setNome('Maria');
console.log(user.getNome());
console.log( typeof User);
console.log(user instanceof User);

let anonymous = User.createGender("male");

console.log(Item.getCount());





class Bird extends User{
  constructor(name){
    super(name)
  }
}



