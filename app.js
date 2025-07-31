require('dotenv').config()
var createError = require("http-errors");
var express = require("express");
var expressEJSLayouts = require("express-ejs-layouts");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var session = require('express-session')
var flash = require('connect-flash');
var passport = require("passport")

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var productsRouter = require("./routes/products");
var authRouter = require("./routes/auth");
var pageRouter = require("./routes/page");
const {User} = require("./models/index")


var app = express();
app.use(session({
  secret: 'noiviet',
  resave: false,
  saveUninitialized: true,
  // cookie: { secure: true }
}))
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(async function(id, done) {
  const user = await User.findByPK(id);
  done(null, user)
  
});

app.use(express.static(__dirname + '/assets'));
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
// Cấu hình layout
app.use(expressEJSLayouts);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.use(authRouter);
app.use( "/pages",pageRouter)

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

module.exports = app;
