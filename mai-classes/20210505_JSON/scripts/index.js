// modules : <script type="module" src"...">

// connecting files: import/ export

// import data from "./data.js";
// let parsedData = JSON.parse(data);
// console.log(parsedData);

// JSON.parse()
// let parsedData = JSON.parse(data);

//i want to change the name, not keeping the same name, you need the default going on

import { data } from "./data.js";
let parsedData = JSON.parse(data);
const section = document.querySelector("#bread");
console.log(parsedData);
parsedData.forEach((obj) => {
  let { id, title, ingredients, image } = obj;
  let card = `
    <div id=${id}>
    <h2>${title}</h2>
    <img src=${image} alt=${title}>
    <h6>${ingredients}</h6>
    </div>
    `;
  section.innerHTML += card;
});
// where are those img LINKS??????????????????
//other way
