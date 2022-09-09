//user browser events
// the most

// Events:
// User Events (interaction) and Browser Events (loading, etc...)
//i am listening load, I am doing a task

document.addEventListener("load", console.log("Hi"));

// Listening:
// Higher order functions aka functions that accept other function a s argument (callbacks)

const divTdivext = document.querySelector(".text");
const print = () => {
  divTdivext.innerHTML += "Hi Iam onclick from HTML";
};
const btn = document.getElementById("more");
console.dir(btn);
btn.onclick = () => {
  divTdivext.innerHTML += "Hi I am on click from Javascript <br>";
};
//resetting color white
const reset = () => {
  header.style.backgroundColor = "white";
};
const changeBg = () => {
  header.style.backgroundColor = "orange";
};

// - Listening to user actions
//   `EventTarget.addEventListener(<namespace>, <callback>)`
// - Mouse Events:
// `click`, `mouseenter`, `mouseleave`
const header = document.querySelector("h1");
header.addEventListener("mouseenter", changeBg);
header.addEventListener("mouseleave", reset);

// - Keyboard Events:
// `keydown`, `keyup`
//1 build functions
function keyUp(e) {
  this.style.backgroundColor = "orange";
  if (e.code == "KeyS") alert("You are cool");
}
function keyDown(e) {
  this.style.backgroundColor = "blue";
}
function keyPress(e) {
  this.style.backgroundColor = "yellow";
}
//2 and 3 add events and call a function
const userInput = document.querySelector("#userInput");
userInput.addEventListener("keyup", keyUp);
userInput.addEventListener("keydown", keyDown);
userInput.addEventListener("keypress", keyPress);

// possible methods to print comments in the console
// const allEll = document.querySelector("*");
// console.log(allEll);
// element.childNodes.forEach((node) => {
//   if (node.nodeName === "#comment") console.log(node);
// });

// //all comments in your html page should be pronted in console
// // but first lets understand apply method
// const letterArr = ["a", "b"];
// const numbers = [0, 1, 2];
// lettersArr.push.apply();
