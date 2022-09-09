const express = require("express");
const app = express();
require("dotenv").config();
const path = require("path");
const morgan = require("morgan");
app.use(morgan("dev"));

// extra security packages

const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const rateLimiter = require("express-rate-limit");

const authRoutes = require("./routes/authRoutes");
const taskRoute = require("./routes/taskRoutes");
const userRoute = require("./routes/userRoutes");
const plantRoute = require("./routes/plantRoute");
const authenticateUser = require("./middleware/auth");
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// DB
const connectDB = require("./db/dbConnect");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("DB is connected 😎");
  } catch (err) {
    console.log(err);
  }
};

start();

// to process the data

// when behind a reverse proxy like Heroku
/* app.set("trust", 1) */
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 req per windowMs
  })
);
app.use(express.json());
/* app.use(express.static("./public")); */
app.use(express.static(path.join(__dirname + "/test")));
app.use(helmet());
app.use(cors());
app.use(xss());

// Let Express understand  Content-Type: application/x-www-form-urlencoded aka form data

app.use(
  express.urlencoded({
    extended: true,
  })
);

// ejs

app.set("view engine", "ejs");

// Alow uploads

app.use("/uploads", express.static("uploads"));

// API Endpoints

// main route

app.get("/", (req, res) => {
  /* res.sendFile("/Screenshot from 2021-09-14 10-34-16.png", {
    root: __dirname,
  }); */
  res.status(200).send("Welcome to Plantastic");
});

app.use("/auth", authRoutes);
app.use("/tasks", authenticateUser, taskRoute);
app.use("/users", userRoute);
app.use("/plants", plantRoute);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

console.log("From app.js");

module.exports = app;
