const express = require("express");
const app = express();
// to handle whats happening on the server
const morgan = require("morgan");
//  Development mode info
app.use(morgan("dev"));
// to process the json data
app.use(express.json());

// uri i need the adress for my database and tahn options- are varied (sometimes dont need them, mongoDB will tell you which do you need), how to gfrab uri from env?
const mongoose = require("mongoose");
const DB_URL = process.env.DB_URL; // mongo DB will tell me wehat to parse, you give them in the brackets after env
mongoose
  .connect(DB_URL, {})
  .then(console.log("DB is connected"))
  .catch((error) => {
    console.log(`There was a problem ${error.message}`);
  });

//   const employees = require("./)

module.exports = app;

// connect is a promised based function
// try and catch - repeat async await session
// any promised based function - than and catch
// npm package dotencv and config() function that will put, all the part about hashpassword for database, stored in env. API key in config.js,
// my route will take
// schema: require-, you have ro
// const
