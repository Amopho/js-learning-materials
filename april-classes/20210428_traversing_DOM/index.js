//Traversing
// Node vs Element NOdes

const ele = document.querySelector("#second").previousElementSibling;
console.log(ele);

const ele2 = document.querySelector("body").firstElementChild;
console.log(ele2);
console.log(ele2.innerHTML);
//firstChild
const mainText = document.querySelector("#text").firstElementChild;
console.log(mainText.textContent);
console.log(mainText.innerText);
console.log(mainText.innerHTML);

// matches
let names = document.querySelectorAll("li");
names.forEach((name) => {
  console.log(name.nodeType);
  if (name.matches(".teacher"))
    console.log(`${name.textContent} is a teacher for FBW 48-1`);
});
// querySelector
const allChildren = document.querySelector("body").children;
console.log(allChildren);
let menuList = document.getElementById("menu");
//or querySelctor()
console.log(menuList.lastElementChild);
console.log(menuList.firstElementChild);

// all comments in your html should be printed in console

// type of the node element value
console.log(Node.COMMENT_NODE);

//function that displays consecutice comments
let displComm = function (el) {
  let arr = [];
  for (let i = 0; i < el.childNodes.length; i++) {
    let node = el.childNodes[i];
    if (node.nodeType == 8) {
      arr.push(node);
    } else {
      arr.push.apply(arr, displComm(node));
    }
  }
  return arr;
};

let commentNodes = displComm(document);

commentNodes.forEach((nodEl) => console.log(nodEl.nodeValue));

//childNodes

// function
// function getComments(context) {
//   var foundComments = [];
//   var elementPath = [context];
//   while (elementPath.length > 0) {
//     var el = elementPath.pop();
//     for (var i = 0; i < el.childNodes.length; i++) {
//       var node = el.childNodes[i];
//       if (node.nodeType === Node.COMMENT_NODE) {
//         foundComments.push(node);
//       } else {
//         elementPath.push(node);
//       }
//     }
//   }

//   return foundComments;
// }

// let commNodes = getComments(document);

// console.log(commNodes[1].nodeValue);
// console.log(foundComments);

// (function () {
//   $("*")
//     .contents()
//     .filter(function () {
//       return this.nodeType == 8;
//     })
//     .each(function (i, e) {
//       alert(e.nodeValue);
//     });
// });
