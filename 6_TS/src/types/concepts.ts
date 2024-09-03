// types
type Employee = {
  id: number;
  name: string;
  jobTitle: string;
};

type Department = {
  id: number;
  name: string;
  manager: Employee;
};

const hrManager: Employee = {
  id: 1,
  name: "Alice",
  jobTitle: "HR Manager",
};

const hrDepartment: Department = {
  id: 101,
  name: "HR Department",
  manager: hrManager,
};

// Unions:
type Vehicle = "Car" | "Bicycle" | "Motorcycle";

function getVehicleDescription(vehicle: Vehicle): string {
  switch (vehicle) {
    case "Car":
      return "Four-wheeled vehicle";
    case "Bicycle":
      return "Two-wheeled, human-powered vehicle";
    case "Motorcycle":
      return "Two-wheeled motorized vehicle";
    default:
      return "Unknown vehicle type";
  }
}

// Intersections:
type Role = {
  role: string;
};

type Developer = Employee & Role;

const softwareEngineer: Developer = {
  id: 1,
  name: "John Doe",
  jobTitle: "Junior",
  role: "Software Engineer",
};

// Literal Types:
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

function sendRequest(url: string, method: HttpMethod): void {
  // Send an HTTP request using the specified method
  console.log(url, method);
}

sendRequest("/api/data", "POST"); // This is valid
// sendRequest("/api/data", "PATCH"); // Error: Argument of type '"PATCH"' is not assignable to parameter of type 'HttpMethod'.

// Type Narrowing:
type Pet = { name: string; kind: "dog" | "cat" };

function printPet(pet: Pet) {
  if (pet.kind === "dog") {
    console.log(`Name: ${pet.name}, Kind: Dog`);
  } else if (pet.kind === "cat") {
    console.log(`Name: ${pet.name}, Kind: Cat`);
  } else {
    console.log(`Unknown pet kind`);
  }
}

const myDog: Pet = { name: "Buddy", kind: "dog" };
printPet(myDog);

// Classes and Inheritance
interface IUser {
  name: string;
  move(distance?: number): void;
}

interface IEngineer extends IUser {
  build(): void;
}

class User implements IUser {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(distance: number = 0): void {
    console.log(`${this.name} moved ${distance} meters.`);
  }
}

class Engineer extends User implements IEngineer {
  build(): void {
    console.log("building project.");
  }
}

let samir = new Engineer("samir");
samir.build(); // Output: Woof! Woof!
samir.move(10); // Output: Buddy moved 10 meters.

// Generics:
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(42);

console.log(output1); // Output: myString
console.log(output2); // Output: 42
