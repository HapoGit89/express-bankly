/** Application for bank.ly */
"use strict"

"use strict";

/** Express app for bankly */

const express = require("express");
const app = express();
const {authUser} = require('./middleware/auth')


app.use(express.json());
const ExpressError = require("./helpers/expressError");

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use(authUser)

/** 404 handler */

app.use(function(req, res, next) {
  const err = new ExpressError("Not Found", 404);

  // pass the error to the next piece of middleware
  return next(err);
});

/** general error handler */

app.use(function(err, req, res, next) {
  res.status(err.status || 500);

  return res.json({
    status: err.status,
    message: err.message
  });
});

module.exports = app;


