// document.write("<h1>JavaScript Advance</h1>");

// 1. Closure:
// In JavaScript, a closure is a feature that allows a function to retain access to variables from its outer (enclosing) scope even after the outer function has finished executing.
// example:
// Outer function that returns an inner function
function outerFunction(outerVariable) {
  // Inner function defined inside the outer function
  let outer = "outer var";
  function innerFunction(innerVariable) {
    // Accessing variables from both the outer and inner functions
    console.log("inner fun:", this);
    console.log("Outer variable:", outerVariable);
    console.log("Inner variable:", innerVariable);
  }

  // Returning the inner function (creating a closure)
  return innerFunction;
}

// Creating closures by calling outerFunction with different arguments
var closure1 = outerFunction("Closure 1");
var closure2 = outerFunction("Closure 2");

// Invoking the inner functions created by the closures
closure1("Inner 1");
closure2("Inner 2");

// 2. Currying:
// Currying is a technique in functional programming where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument. This allows you to partially apply the function and create new functions with fewer arguments. Currying is often used to create more specialized and reusable functions.

// Curried version of the function
function curryAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// Using the curried function
var curriedAdd = curryAdd(1);
var curriedResult = curriedAdd(2)(3);

console.log("Curried:", curriedResult); // Output: 6

// 3. this keyword:
console.log(this);

// function object
function showThis() {
  const greet = "Hello";
  console.log("Hello, everyone");
  console.log("function: ", this);
}
showThis();

// in object scop this keyword
var person = {
  name: "John",
  sayHello: function () {
    console.log("Hello, my name is " + this.name);
  },
};
person.sayHello();

// Event Handler Context
document.getElementById("heding").addEventListener("click", function () {
  console.log(this);
});

// 4. Prototype Inheritance
// Parent constructor
function Animal(name) {
  this.name = name;
}

// Adding a method to the prototype of Animal
Animal.prototype.sound = function () {
  console.log("Some generic sound");
};

// Child constructor
function Dog(name, breed) {
  // Call the parent constructor
  Animal.call(this, name);
  this.breed = breed;
}

// Setting up the prototype chain
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Adding a method to the prototype of Dog
Dog.prototype.bark = function () {
  console.log("Woof! Woof!");
};

// Creating an instance of Dog
var myDog = new Dog("Buddy", "Golden Retriever");

// Inheriting from the Animal prototype
myDog.sound(); // Output: Some generic sound

// Using the Dog-specific method
myDog.bark(); // Output: Woof! Woof!

// 4. Promise
const asyncTask = new Promise((resolve, reject) => {
  const status = true;
  if (status) {
    setTimeout(() => {
      resolve({ name: "jone", age: 21, email: "jone@gmail.com" });
    });
  } else {
    reject("Error: Fail to fetch user data.");
  }
});

// two promise handling method
// 1 .then and .catch
asyncTask
  .then((data) => {
    console.log(".then and .catch", data);
  })
  .catch((error) => {
    console.log(error);
  });

// 2 Async await
async function getData() {
  try {
    const data = await asyncTask;
    console.log("async await", data);
  } catch (error) {
    console.log(error);
  }
}

getData();
