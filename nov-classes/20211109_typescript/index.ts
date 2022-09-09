// Typescript -> A javascript superset
// language build upon top of the JS, the only disantvage- compile it into JS, to make it working in multiple environments
// advanced feature from TS compiled into JS

console.log("Hey, I'am Typescript");
// run the compiler to make it possible to run it in any JS environment

let x: number;
x = 2;

// after compiling the ts will tell that x has 1 error- the error comes from another file inside of the directry, it is able to recignize it

// creating json file, to specify the rules for our index.ts

const add = (x: number, y: number) => {
  return x + y;
};

const result = add(2, 3);
console.log(result);

type Food = "Apple" | "Banana";
let eat: Food = "Apple";

// interface
interface Car {
  model: string;
  year: number;
  [key: string]: any;
}

// create a car with that car type
// model and year are musts, another is optional
const Ferrari: Car = {
  model: "448",
  year: 2020,
};
const Bugatti: Car = {
  model: "diov",
  year: 2019,
  color: "red",
  madeYear: 2021,
};

// one more type

let newArray: number[];
// now new array is a array with any numbers
newArray = [2, 3, 4, 55];
// newArray.push("Hi");

type ListOfMany = [number?, string?, boolean?];
const arr: ListOfMany = [];
arr.push(22);
arr.push("Cool");
arr.push(true);
//arr.push({})
