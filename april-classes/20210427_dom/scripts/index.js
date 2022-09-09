// change the font of the body element
const body = document.querySelector("body");
body.style.fontFamily = "Arial";

//queryselectorall -picks all the selectors with its class
//query selector works with first one in the html

//center the text of h1
const title = document.querySelector(".title");
title.style.textAlign = "center";

//main
const mainSec = document.querySelector(".main");
mainSec.style.display = "flex";
mainSec.style.flexFlow = "row wrap";
mainSec.style.justifyContent = "space-around";
mainSec.style.boxSizing = "border-box";

//headings with "category" class, select them, and change the color and font-style of each
const category = document.querySelectorAll(".category");
console.log(category);

// //unpacking things from an object
category.forEach(({ style: cat }) => {
  console.log(cat);
  cat.fontSize = "1,5rem";
  cat.fontStyle = "bold";
  cat.borderBottom = "1px black solid";
});

// colorGenerator function, returning different colors, with transparency. By this way use this function to give each lust a different colour
const colorGen = () => {
  let result = "#";
  let colorCode = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    result += colorCode[Math.floor(Math.random() * 16)];
  }
  result += "50";
  console.log(result);
  return result;
};

//color genwrator in other way
const colorGenOtherWay = () => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let a = Math.random();
  //rgba (23,222,34,0.43455)
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

// i want to swelcet my food catrgories, all and give them a colour
const food = document.querySelectorAll(".food-category");
food.forEach(({ style: item }) => {
  item.backgroundColor = colorGenOtherWay();
  //item.backgroundColor = colorGenOtherWay();
  item.width = "30%";
  item.height = "10rem";
  item.textAlign = "center";
  item.padding = "1rem";
  item.borderRadius = "5px";
});

// Select all even allergy-info items. Give the even items differewnt backgound color
// .allergies li showing where those infos live
// first () for my forEach, second () for my callback, { } for my curly brackets

const allergy = document.querySelectorAll(".allergy-info");
allergy.forEach(({ style }, i) => {
  if (i % 2 == 0) {
    style.backgroundColor = colorGenOtherWay();
  }
});

// with nth child
// const allergy = document.querySelectorAll(".allergy-info:nth-child(even)");
// allergy.forEach(({ style }) => {
//   style.backgroundColor = colorGenOtherWay();
// });

//MAke the allergy warning appear as a column in the center of the page
const allergySecStyle = document.querySelector(".allergy-warning").style;
allergySecStyle.display = "flex";
allergySecStyle.flexFlow = "column";
allergySecStyle.justifyContent = "center";
allergySecStyle.alignItems = "center";

//The descriptions in the footer should also be styled, e.g. a rounded border with a background color. They should appear in a column for mobile and in a row for desktop.

// const foodItems = document.querySelectorAll(".food-desc");
const footer = document.querySelector(".footer");
footer.style.display = "flex";
footer.style.flexFlow = "row wrap";
footer.style.justifyContent = "center";
const foodItems = document.querySelectorAll(".food-desc");
// foodItems.forEach
// which media I am chcecking,
const media = window.matchMedia("(max-width: 400px)");
console.log(media);
foodItems.forEach(({ style }) => {
  console.log(style);
  style.border = "5px solid orange";
  style.borderRadius = "100%";
  style.height = "7rem";
  style.width = "7rem";
  style.display = "flex";
  style.justifyContent = "center";
  style.alignItems = "center";
  style.margin = "1rem";
  if (media.matches) {
    // mobile
    style.flexFlow = "column";
    style.backgroundColor = "red";
  } else {
    //desktop
    style.flexFlow = "row";
    style.backgroundColor = "orange";
  }
});

//resize AND reload -when you don't have an event listener
