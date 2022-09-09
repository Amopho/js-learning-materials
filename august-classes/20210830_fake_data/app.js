const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));

const mongoose = require("mongoose");
const faker = require("faker");
// Get you the
const path = require("path");
const fakeModel = require("./model/user");
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("DB is connected"))
  .catch((err) => {
    console.log(`There was error ${err.message}`);
  });
// console.log(path.resolve(__dirname, "views"));
// console.log(faker.animal.dog());

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

app.get("/", (req, res) => {
  //   res.render("home", { message: "Test" });
  fakeModel.find((err, data) => {
    if (err) {
      console.log(err);
    } else if (data) {
      // res.render("home", {data:data})
      res.render("home", { data });
    } else {
      res.render("home", { data: {} });
      // even if data are not there, i want to tell my app it is an empty object
    }
  });
});

app.post("/", (req, res) => {
  for (let i = 0; i < 10; i++) {
    const fakeData = new fakeModel({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      city: faker.address.city(),
      avatar: faker.image.avatar(),
    }); // faker will create data and mongoose will assign them to db
    try {
      fakeData.save(); // immediate storage
    } catch (err) {
      console.log(err);
    }
  }
  res.redirect("/");
});

module.exports = app;
