//object
const obj = {
  name1: "First",
  name2: "second",
  name3: ["third", "three", "triple"],
};
console.log(obj.name1);
console.log(obj.name3[1]);

//access properties
console.log(obj["name3"][2]);
console.log(obj.name3[2]);
const obj2 = {};
console.log(typeof obj2);
//assign with dot notation
obj2.name4 = "Fourth";
console.log(obj2);
//assign with [] notation - more usefull to fulfill empty object
obj2["name5"] = "Fifth";
obj2[6] = 170;
console.log(obj2);
obj2.name5 = "Five";
console.log(obj2);
// create an obj and array
const save = new Object();
const arr = new Array(3, 4, 8, 9);
console.log(save);
console.log(arr);

// for in objects
for (let prop in obj2) {
  console.log(`${prop}: ${obj2[prop]}`);
}
console.log(obj2);
// let me introduce myself
const meeee = {
  firstname: "Meee",
  age: 34,
  birthYear: 1986,
  gender: "Female",
  height: 170,
  print: function () {
    console.log(
      `I am ${this.firstname}, my age is ${this.age} I was born in ${this.birthYear}`
    );
  },
  old: function () {
    let currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  },
};

meeee.print();
console.log(meeee.old());
//getting keys
let keysMe = Object.keys(meeee);
console.log(keysMe);
//getting values

//object assign

// AEIOU:
// Vowels. Create a function that takes a string in its parameters and counts the number of vowels (i.e. in English, “a, e, i, o, u”) in the string.
// i.e. findVowels(“this is a string”) ➞ 4
// SumOfNumbers.
// Create a program that adds up the numbers in an array (of at least 3 numbers). Bonus: Print to screen both the sum and the product of these numbers.
// No Duplicates!
// A set is a collection of unique items. A set can be formed from an array by removing all duplicate items. Create a program which transforms an array into a set of unique values. See the examples below. Example:
// [1, 4, 4, 7, 7, 7] ➞ [1, 4, 7]
// [1, 6, 6, 9, 9] ➞ [1, 6, 9]
// [2, 2, 2, 2, 2, 2] ➞ [2]
// toCamelCase("hello_world") ➞ "helloWorld"
// toCamelCase("javascript_is_fun") ➞ "javascriptIsFun"
// Bonus: Write a function which accepts any amount of numbers and returns the average.
// e.g
// console.log(average(0)) ---> 0
// console.log(average(1, 2)) ---> 1.5
// console.log(average(1, 3, 6, 10)) ---> 5
// console.log(average(12, 14, 16)) ---> 14
// Scrabble. Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand.
// Example:
// [ { tile: "N", score: 1 }, { tile: "K", score: 5 }, { tile: "Z", score: 10 }, { tile: "X", score: 8 }, { tile: "D", score: 2 }, { tile: "A", score: 1 }, { tile: "E", score: 1 } ]
const scrabble = [
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 },
];
// The player's maximum score: 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28
function sumBricks(arr) {
  let total = 0;
  // start value
  for (let i = 0; i < arr.length; i++) {
    //go through the array of objects and
    total += arr[i]["score"];
    // add value from score at array index i
  }
  return total;
  //result
}
console.log(sumBricks(scrabble));
//display the function result

// Counting Letters. Create a function that counts the number of occurrences of each letter in a string. Return an object with key pair values of letters and the number of occurrences for each letter.
// Example:
// countLetters("tree") ➞ {t: 1, r: 1, e: 2}

// Ex 1
// Write a function that accepts several parameters and calculates the number of money that will have been saved as pension until a person retires. The function should be self invoked and should have the following parameters:
// The current age of the person // e.g. 40
// The retirement age of the person // e.g. 60
// The monthly wage the person earns // e.g. 1000
// The percentage (as integer) that the person saves each month // e.g. 10%

// My approach
function retirement(ageOfRetirement, age) {
  // outer function
  return (salaryAMonth, percentageSaved) =>
    salaryAMonth * ((ageOfRetirement - age) * 12) * percentageSaved; //inner function
}
const salaryOfALifetime = retirement(60, 40)(1000, 0.1);
console.log(salaryOfALifetime);

//With the use of SAFI
((ageB, ageOfRetirementB, salaryAMonthB, percentageSavedB) => {
  if (ageB >= ageOfRetirementB) {
    console.log("Too old");
  } else {
    let savingTime = ageOfRetirementB - ageB;
    console.log("Years left until you ll be old,", savingTime);
    let savingsMonths = savingTime * 12;
    console.log("Months left utnil you ll be old,", savingsMonths);
    let savedMoney = savingsMonths * salaryAMonthB * (percentageSavedB / 100);
    console.log(
      `In ${savingTime} years you ll get old, but you will have ${savedMoney} to spend`
    );
  }
})(40, 65, 2000, 5);
// age
// ageOfRetirement
// salaryAMonth
// yearsOfSavings = age - yearsOfSavings
// savingsAMonth = salaryAMonth * 0.1
// retirementMoney = yearsOfSavings * 12 * savingsAMonth

// If the person has already retired then the message ‘You’re already retired!’ should be printed. If not, then the program should calculate how many years remain until the person retires, the monthly income and take a specific percent of this income every month as saved money.
// Example: A lady is 40 years old, she retires at 65, she earns $2000 per month and she saves the 5% of it. How much money will she have saved until she retires?
// Output: $30000

// Q&A
//1) array.prototype, function.protoype- what does prototype mean/do?
//2) Rounding errors - explanation.
//3) What is an algorithm?
//4) SIAF, IIFE , closure - where to use them, teh best?
//4) Deep and shallow copy of an array
//5) spread operator ...
//6) clones vs refferences. 10 Feb lesson

// Extracting parts of a string
// Checking if a string is inside another string: includes()
// Converting strings into Numbers
// Using modulo”" Math:
// Rounding up with Math.ceil()
// Rounding down with Math.floor()
// Maximum and minimum with Math.max(), Math.min() Number Pitfalls:
// Dealing with NaN: isNaN(<expression>), typeof NaN
//What is an Algorithm?
//fallback
//Syntax debugging VII

let strWithChr = "I'am   \n Hi";
console.log(strWithChr);
let varStr1 = "😏";
let varStr2 = "🙄";
let resultStr = 1 > 55 ? varStr1 : varStr2;
console.log(resultStr);
//trimm
let str3 = "Hi";
let userName = "Hadi ";
let lastName = "Nsreeny     ";
console.log(userName.trim());
console.log(userName.length);
console.log(userName.trim().length);
let bOne = 33;
let billOneTip = 1.1;
let result = `bOne ${Math.floor(bOne * billOneTip)} `;
console.log(result);

// assign an array
let cityName = [];
console.log(cityName.length);
cityName[0] = "Paris";
cityName[1] = "Berlin";
cityName[2] = "Dubai";
// remove an item
console.log(cityName);
let removedItem = cityName.pop();
console.log(cityName);
console.log(removedItem);
// Find the index of an item
const names = ["Zain", "Nancy", "Olga"];
console.log(names.indexOf("Nancy"));
let pos = names.indexOf("Nancy");

// splice
const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]
months.splice(4, 1, "May");
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
//remove by splice
let removedItemFromIndex = names.splice(0, 1);
console.log(removedItemFromIndex);
//itterate through array
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// split
let str = "Hi this is me";
// .split()
// divide a string into an array
let newArr = str.split(" ");
newArr[4] = "awesome";
console.log(newArr);
// .join()
// create a string from an array
let newStr = newArr.join(" ");
console.log(newStr);
