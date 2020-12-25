const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var authRouter = require("./routes/authentication");
const blogs = require("./routes/blogs");
var app = express();


mongoose.connect(
  "mongodb+srv://Ahmedrbk:got14227378@cluster0.tlsqp.mongodb.net/escaper",
  { useNewUrlParser: true, useUnifiedTopology: true },
  {
    useMongoClient: true
  }
);
mongoose.connection
  .once("open", () => console.log("Connected to the database!"))
  .on("error", (err) => console.log("Error", err));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/api/blogs", blogs);
app.use("/api", authRouter);

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
app.listen(3000,()=>{console.log('app listening at http://localhost:3000')})
module.exports = app;
