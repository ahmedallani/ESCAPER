const cors = require("cors");
const bodyParser = require("body-parser");
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
//const passport = require('passport');
//var authRouter = require("./routes/authentication");
const blogs = require("./routes/blogs");
const users = require("./routes/user.routes");
const { checkUser, requireAuth } = require("./middleware/auth.middleware");

var app = express();
// const expressSession = require('express-session')({
//   secret: 'secret',
//   resave: false,
//   saveUninitialized: false
// });
// const initializePassport = require('./passport-config')
// initializePassport(passport, email => {
//   return users.find(user => user.email === email)
// })
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  allowedHeaders: ["sessionId", "Content-Type"],
  exposedMethods: ["sessionId"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false
};
app.use(cors(corsOptions));
require("dotenv").config();
const mongoose = require("mongoose");
//protect our data we remove the name of our database and password and we change it with process ... inside .env
// mongoose.connect(
//   // "mongodb://localhost/test2",
//   "mongodb+srv://" +
//     process.env.DB_USER_PASS +
//     "@cluster0.4vcxr.mongodb.net/esciper?retryWrites=true&w=majority",
//   {
//     useNewUrlParser: true
//   }
// );
mongoose.connect('mongodb://localhost/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("connected");
});
// "mongodb+srv://Ahmedrbk:got14227378@cluster0.tlsqp.mongodb.net/escaper"
//mongodb+srv://dhiadhafer:dhia123@cluster0.4vcxr.mongodb.net/esciper?retryWrites=true&w=majority
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(logger("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// app.use(expressSession);
//  app.use("/api", authRouter);
app.use(checkUser);
app.get("/jwtid", requireAuth, (req, res) => {
  res.status(200).send(res.locals.user._id);
});
//routes
app.use("/api/blog", blogs);
app.use("/api/user", users);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
app.listen(3000, () => {
  console.log("app listening at http://localhost:3000");
});
module.exports = app;
