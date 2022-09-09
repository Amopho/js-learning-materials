//Blocking vs  nonblocking
//blocking code - console.log, loops, loading files

//Blocking code
console.log("Hi");

//Non blocking code
window.setTimeout(() => {
  console.log('Hi, there- "the first will be the lasts"');
}, 1000);
console.log("I can run first, although I have been second");

let wait = window.setTimeout(
  () => console.log("Execute after waiting 5 secs"),
  5000
);
console.log("I can't wait");

let x = 33;
console.log(x);
//promisse
//promisses are callbacks, but are a little bit cleaner on writing - "sugar coated callbacks"
// you use them if you dont want to wait long time for tasks that are taking too long to be done, it will work n the background. eg downloading an image, or a vid from another server.
const checkPromise = new Promise((resolve, reject) => {
  let x = false;
  if (x) {
    resolve("everything is cool");
  } else {
    reject("sorry, it's not cool");
  }
});
//resolve - succesful got that File
// reject - cant do that task
checkPromise
  .then((message) => {
    console.log(`I am then and ${message}`);
  })
  .catch((err) => {
    console.log(`Iam a catch and ${err}`);
  });
console.log("Hi I am Ally");

// did you clean your room?

// Promisify with setTimeOut
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
let ms = 2500;
function doSomething() {
  let text = document.querySelector(".text");
  text.innerHTML = `took me ${ms}ms to be done.`;
}

delay(ms).then(doSomething);

// anonymous functions as arguments of other functions

setTimeout(function () {
  console.log("Execute, please after 2 seconds");
}, 2000);

//IIFE immediately invoked function execution
//define it
(function () {
  console.log("Hi I am IIFE");
})();
//execute it

//IIFE with given argument
let person = {
  firstName: "Ally",
  lastName: "Ward",
};
(function () {
  console.log(`${person.firstName} ${person.lastName}`);
})(person);

// anonymous function, the ES6 style
let add = function (a, b) {
  return a + b;
};
console.log(add(2, 2));

let addEsSix = (a, b) => {
  return a + b;
};
console.log(addEsSix(3, 6));
// ES6 arrow fucntion shorthand:
let shorty = (a, b) => a + b;
console.log(shorty(5, 5));
