// Typescript -> A javascript superset
// language build upon top of the JS, the only disantvage- compile it into JS, to make it working in multiple environments
// advanced feature from TS compiled into JS
console.log("Hey, I'am Typescript");
// run the compiler to make it possible to run it in any JS environment
var x;
x = 2;
// after compiling the ts will tell that x has 1 error- the error comes from another file inside of the directry, it is able to recignize it
// creating json file, to specify the rules for our index.ts
var add = function (x, y) {
  return x + y;
};
var result = add(2, 3);
console.log(result);
var eat = "Apple";
// create a car with that car type
// model and year are musts, another is optional
var Ferrari = {
  model: "448",
  year: 2020,
};
var Bugatti = {
  model: "diov",
  year: 2019,
  color: "red",
  madeYear: 2021,
};
// one more type
var newArray;
// now new array is a array with any numbers
newArray = [2, 3, 4, 55];
var arr = [];
arr.push(22);
arr.push("Cool");
arr.push(true);
//arr.push({})
console.log(arr);
