console.log('teste') 

function add1 (n1: number, n2: number): number{
  return n1 + n2
}

console.log(add1(2,6))

let box = 'roupa'
console.log(typeof box)


//1- type annotations
console.log('teste')

//var
let nome: string = 'Jão'
let numero: number = 1;
let comeu: boolean = true;

//matrizes
let dias: string[] = ['segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado', 'domingo']

//objeto
let pessoa: {
  nome: string,
  idade: number
}

pessoa = {
  nome: 'Jão',
  idade: 1
}

//2 - numbers
let x: number = 13.4,
    y: number = 20

let bigint: bigint = BigInt(10)



//let person: object;

let person : {
  firstName: string;
  lastName: string;
  age: number;
  address: {
    street: string;
    num: number;
  }
} = {
  firstName: 'Jão',
  lastName: 'Silva',
  age: 24,
  address:{
    street: 'Rua dos Bobos',
    num: 0
  }
}

//empty type
let vacant: {} = {};

console.log(vacant.toString());

//array
let skills: string[] = [];
//skills = ['Problem Sovling','Software Design','Programming'];
skills[0] = 'Java';
skills[1] = 'Javascript';
skills[2] = 'Typescript';
skills[3] = 'Angular';

skills.push('Software Design');
console.log(skills.length);

let seila = skills.map(skill => skill.toUpperCase());
console.log(seila);


let linguagens: (string | number)[] = ['Java', 'Javascript', 'Typescript', 1, 2, 3];

//tupla - valores fixos
let tupla: [string, number, boolean] = ['Jão', 1, true];
let bgColor: [string, string, string] = ['#f00', '0f0', '#00f'];
console.log(bgColor[0]);


//grupo de constantes - enum
enum Month {
  Jan = 1,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec
};

function isItSummer(month: Month) {
  let isSummer: boolean;
  switch (month) {
      case Month.Jun:
      case Month.Jul:
      case Month.Aug:
          isSummer = true;
          break;
      default:
          isSummer = false;
          break;
  }
  return isSummer;
}

//any
let menino: any = 'Jão';
menino = 10.123;
menino = true;
console.log(menino.toString());

//void
function log(msg: string): void {
  console.log(msg);
}

log('teste')

//Never - não tem valor nenhum
//Normalmente, se usa o tipo para representar o tipo de retorno de uma função que sempre lança um erro. 
/*function raiseError(message: string): never {
  throw new Error(message);
}
raiseError('Generated error');
*/

//union types
function addd(a: number | string, b: number | string) {
  if (typeof a === 'number' && typeof b === 'number') {
      return a + b;
  }
  if (typeof a === 'string' && typeof b === 'string') {
      return a.concat(b);
  }
  throw new Error('Parameters must be numbers or strings');
}


//TYPE ALIASES
type alphanumeric = string | number;

let x1: alphanumeric = 'Jão', x2: alphanumeric = 1;
console.log(x1, x2);


/*type MouseEvent: 'click' | 'dbClick' | 'mouseup' | 'mousedown';

let mouseEvent: MouseEvent;
mouseEvent = 'click'; // valid
mouseEvent = 'dbClick'; // valid
mouseEvent = 'mouseup'; // valid
mouseEvent = 'mousedown'; // valid

let anotherEvent: MouseEvent;
console.log(anotherEvent);
*/

//Modules
import { EmailValidator } from './EmailValidator';	

let email = 'janedoee@typescripttutorial.net';
let validator = new EmailValidator();
let result = validator.isValid(email);
console.log(result);





//
console.log('testando')

function getRandomNumberElement(items: number[]): number {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}
console.log(getRandomNumberElement([1, 2, 3, 4, 5]));




function prop<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

class Stack<T> {
  private elements: T[] = [];

  constructor(private size: number) {
  }
  isEmpty(): boolean {
      return this.elements.length === 0;
  }
  isFull(): boolean {
      return this.elements.length === this.size;
  }
  push(element: T): void {
      if (this.elements.length === this.size) {
          throw new Error('The stack is overflow!');
      }
      this.elements.push(element);

  }
  pop(): T {
      if (this.elements.length == 0) {
          throw new Error('The stack is empty!');
      }
      return this.elements.pop();
  }
}

//generic interfaces
interface Pair<K, V> {
  key: K;
  value: V;
}

let month: Pair<string, number> = {
  key: 'Jan',
  value: 1
};

console.log(month);



// if... else
const max = 100;
let counter = 100;

counter < max ? counter++ : counter = 1;

console.log(counter);


//switch
// change the month and year
let mes = 2,
    ano = 2022;

let dia = 0;
switch (mes) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        dia = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        dia = 30;
        break;
    case 2:
        // leap year
        if (((ano % 4 == 0) &&
            !(ano % 100 == 0))
            || (ano % 400 == 0))
            dia = 29;
        else
            dia = 28;
        break;
    default:
        throw Error('Invalid month');
}

console.log(`The month ${mes} in ${ano} has ${dia} days`);


//for 
let i = 0;
for (; ;) {
    console.log(i);
    i++;
    if (i > 9) break;
}

//while
let counterr = 0;
while(counterr < 5){
  console.log(counterr)
  counterr++
}

//do while
let yb = 0;

do {
  console.log(yb);
  yb++
} while (yb < 10);




let products = [
  { name: 'phone', price: 700 },
  { name: 'tablet', price: 900 },
  { name: 'laptop', price: 1200 }
];

for (let i = 0; i < products.length; i++) {
  if (products[i].price == 900)
      break;
}
console.log(products[i]);


for (let index = 0; index < 9; index++) {
    
  // if index is odd, skip it
  if (index % 2)
      continue;

  // the following code will be skipped for odd numbers
  console.log(index);
}


let add: (a: number, b: number) => number =
    function (x: number, y: number) {
        return x + y;
    };

    function multiply(a: number, b: number, c?: number): number {

      if (typeof c !== 'undefined') {
          return a * b * c;
      }
      return a * b;
  }


  function applyDiscount(price: number, discount: number = 0.05): number {
    return price * (1 - discount);
}

console.log(applyDiscount(100)); // 95




function getTotal(...numbers: number[]): number {
  let total = 0;
  numbers.forEach((num) => total += num);
  return total;
}



//sobrecarga de função (function overloadings)
function addc(a: number, b: number): number;
function addc(a: string, b: string): string;
function addc(a: any, b: any): any {
   return a + b;
}


//poo
class Person {
  private static headcount: number = 0;

  private _age: number;
  private _firstName: string;
  private _lastName: string;

  public get age() {
      return this._age;
  }

  public set age(theAge: number) {
      if (theAge <= 0 || theAge >= 200) {
          throw new Error('The age is invalid');
      }
      this._age = theAge;
  }

  public get firstName() {
      return this._firstName;
  }

  public set firstName(theFirstName: string) {
      if (!theFirstName) {
          throw new Error('Invalid first name.');
      }
      this._firstName = theFirstName;
  }

  public get lastName() {
      return this._lastName;
  }

  public set lastName(theLastName: string) {
      if (!theLastName) {
          throw new Error('Invalid last name.');
      }
      this._lastName = theLastName;
  }

  public getFullName(): string {
      return `${this.firstName} ${this.lastName}`;
  }
}

//Heranaça
class Employee extends Person {
  constructor(
      firstName: string,
      lastName: string,
      private jobTitle: string) {
      
      super(firstName, lastName);
  }
}


class Employee2 {
  private static headcount: number = 0;

  constructor(
      private firstName: string,
      private lastName: string,
      private jobTitle: string) {

      Employee.headcount++;
  }

  public static getHeadcount() {
      return Employee.headcount;
  }
}


//Abstract
abstract class Employeez {
  constructor(private firstName: string, private lastName: string) {
  }
  abstract getSalary(): number
  get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
  }
  compensationStatement(): string {
      return `${this.fullName} makes ${this.getSalary()} a month.`;
  }
}

//Interface
interface C {
  c(): void
}

interface D extends B, C {
  d(): void
}



class Contractor extends Employeez {
  constructor(firstName: string, lastName: string, private rate: number, private hours: number) {
      super(firstName, lastName);
  }
  getSalary(): number {
      return this.rate * this.hours;
  }
}