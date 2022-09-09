const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
app.use(morgan("dev"));

const hbs = require("express-handlebars");
app.set("view engine", "hbs");
// to make sure that this location is reachable from whenewer, go to view an work on that,adding the infinite root for this direcory
app.set("views", path.join(__dirname, "views"));
// console.log(__dirname); /home/dci/users/Alie/app/fbw48/classes/sep-classes/20210906_validations
// now my engine is the Express
app.engine(
  "hbs",
  hbs({
    //   telling options of my what extensions I need...
    extname: "hbs",
    // default
    // i implement the base line for app and then..., my default layout will be the layout- i tell where the layout file lives.
    layoutsDir: __dirname + "/views/layouts/",
  })
);

const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const { body, validationResult } = require("express-validator");
// body express validator is to read your request body- is a function, don't mistake them

// run those libraries
app.use(express.json());
app.use(cookieParser());
app.use(
  expressSession({
    secret: "somethingSecret",
    saveUninitialized: false,
    resave: false,
    // create new and save it
  })
);

// now creat a response to see what am I doing
app.get("/", (req, res) => {
  res.render("index", {
    title: "Validation",
    done: false,
    // i dont have anything done yet, its a start page
    data: "Hey welcome to our app",
  });
  req.session.errors = null;
});

app.get("/about", (req, res) => {});

app.post("/submit", (req, res) => {
  //   req.body
  body("email", "Please write valid email").isEmail(),
    //  if any of those functions would say true it will move to the next()
    // more VAlidations:
    // isMobilePhine
    // isEmail()
    // isPostalCode()
    // isCurrency()
    // isCreditCard()
    body("pass", "Invalid password").isLength({ min: 5 }),
    body("passConf").custom((value, { req }) => {
      if (value != req.body.pass) {
        throw new Error("Password incorrect!");
      }
    });
  //   this function triggers what I want to check
  //   email pass passConf

  (req, res) => {
    //   req has form' data
    req.body.email;
  };
});

module.exports = app;
