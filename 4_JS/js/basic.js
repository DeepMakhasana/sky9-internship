document.write("<h1>Basic of JavaScript</h1>");

// 1. variables
// var - function scope
// let - block scope
// cosnst - blocks as well as functions scope

// 2. data type - primitive
// Number
// String
// Boolean
// null - object
// undefined
// BigInt
// Symbol

// 3. operators
// Arithmetic
// Assingnment
// comparison
// string
// Logical
// Bitwise
// Ternary
// Type

// 4. statements
// 1 conditional
// if else
// switch
// 2 itrative
// for
// while
// do while
// for of - in

// 5. data type - non-primitive
// Array
let vehicals = ["bike", "car", "bus"];

// Object
const userDetails = {
  name: "Deep Makhasana",
  email: "deepmakhasana.dev@gmial.com",
  phone: 7043447395,
};
const userDetail = Object.values(userDetails);

// Math object
const powerOf = Math.pow(2, 3);
const squrOf = Math.sqrt(4);
const min = Math.min(2, 3);
const max = Math.max(4, 10, 34);

// Data object
const cuurentDataTime = new Date();
const hours = cuurentDataTime.getHours();
const minute = cuurentDataTime.getMinutes;
const sec = cuurentDataTime.getSeconds(0);
// console.log(`${hours}:${minute}:${sec}`);

// -----------------------------------------------------------------

// prototype
function User(name, email, age) {
  this.name = name;
  this.email = email;
  this.age = age;
}

User.prototype.getName = function () {
  return this.name;
};

const U1 = Object.create(User, {
  name: { value: "deep", writable: true },
  email: { value: "deep@gmail.com" },
  age: { value: 21 },
});
// console.log(U1);

// -----------------------------------------------------------------

// Prototype Inheritance
function Programmer(name, email, age, role) {
  User.call(this, name, email, age);
  this.role = role;
}
Programmer.prototype = Object.create(User.prototype);

const jay = new Programmer("Jay", "jay@gmail.com", 22, "React developer");
// console.log(jay.getName());

// -------------------------------------------------------------------

// classes and inheritance
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  getPersonDetail() {
    return {
      name: this.name,
      age: this.age,
      gender: this.gender,
    };
  }
}

class Employer extends Person {
  constructor(name, age, gender, email, role) {
    super(name, age, gender);
    this.email = email;
    this.role = role;
  }

  getEmployerDetail() {
    return this;
  }

  updateEmployerDetail(
    email,
    role,
    name = this.name,
    age = this.age,
    gender = this.gender
  ) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.email = email;
    this.role = role;
  }
}

const ansh = new Employer(
  "Ansh Gor",
  21,
  "male",
  "anshgor@gmail.com",
  "UI/UX Desiner"
);

ansh.updateEmployerDetail("ansh@gmail.com", "designer");

console.log(ansh.getEmployerDetail());
