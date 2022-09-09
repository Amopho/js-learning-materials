const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));
// cookie, session
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");

// hbs

const path = require("path");
const hbs = require("express-handlebars");
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
app.engine(
  "hbs",
  hbs({
    extname: "hbs",
    defaultLayout: "layout",
    layoutsDir: __dirname + "/views/layouts/",
  })
);

// json processing
app.use(express.json());
// url bar
app.use(
  express.urlencoded({
    extended: true,
  })
);

// cookies
app.use(cookieParser());
// Session
app.use(
  expressSession({
    secret: "shhh",
    saveUninitialized: false,
    resave: false,
    // start fresh every single time when new session starts
  })
);
// mongoDB
const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("DB is connected 😎"))
  .catch((error) => {
    console.log(`There was a problem ${error.message}`);
  });
// Alow uploads
app.use("/uploads", express.static("uploads"));

// router
// const auth = require("./routes/auth");
// app.use("/", auth);
// const users = require("./routes/users");
// app.use("/users", users);
// const user = require("./routes/user");
// app.use("/user", user);

module.exports = app;
