/* 
To start new express project
npm init -y
 echo "PORT=5000" > .env
 echo "node_modules/" > .gitignore
 npm i express
 npm i dotenv
 npm i lowdb
 npm i nodemon --save-dev
 touch index.js
 json script
 "start": "nodemon index.js"
 */

// express
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// lowdb database = a block of code establishing json as database , now it would be just empty json file
const lowDb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync"); // its a class build by db team
const jsonFile = new FileSync("db.json"); // establish filrfilesync is able to create files in json form
const db = lowDb(jsonFile); //ask FS to read (acces) that file function that access the file
// json setup old school
// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(bodyParser.raw());

// json cool method
app.use(express.json());

//root route
app.get("/", (req, res) => res.send("Welcome in lowdb"));

// db init, I use async to use await - i need to wait to get the db so it doesnt broken an app
app.get("/new", async (req, res) => {
  await db.defaults({ articles: [], user: {}, num: 1 }).write();
  res.send("Initialized db");
});

app.get("/add", async (req, res) => {
  // url /add?id=1&title=cool
  // get in respect of databases is not the same as get request sent to ask for data. Get for DB will look into DB and search for specific property
  const id = req.query.id;
  const title = req.query.title;
  const product = req.query.product;
  // search in frontend for query with keyword id, title, product and then
  db.get("articles").push({ id: id, title: title, product: product }).write();
  // get -look into that database and DO something - f.e. push
  res.send(
    `New data being entered id: ${id} title: ${title} product: ${product}`
  ); // res.send() telling the user what have you done
});

// write an information in order to store it in your new database

// find
// url find?id=1
app.get("/find", async (req, res) => {
  const idToFind = req.query.id;
  res.send(await db.get("articles").find({ id: idToFind }).value());
});
// // i want to grab the value() not writing so I use it instead of write()
// /find?id=1
// ? - any parametres that I want to pass
// if i have it I show it immediately. grab the whole object with that id that aligns with my  requesrt

// // find with not found message

// // update - i want to have another value by adding +1
app.get("/update", async (req, res) => {
  // url /update
  await db.update("num", (n) => n + 1).write();
  const num = db.get("num").value();
  res.send(`num was updated, now num equals ${num}`);
});
// this callback funxtion will have a ability to read a value 'n' of a num - it wiil read n, grab original and overwrite it with +1,

// set - i want to establish the new one, something i never had not grabbing somethiong existing (which 'get' makes)

// // delete
// app.delete("/delete", async (re1, res) => {
//   // remocve an article
//   // url /delete?title=water
//   const title = req.query.title;
//   await db.get("articles");

//   // db.unset("user.name").write();
//   // res.send(200).send("user name was removed");
// });

app.listen(PORT, () => {
  console.log(`server listen on http://localhost:${PORT}`);
});
