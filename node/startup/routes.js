const express = require('express');
const quizzes = require('../routes/quizzes');
const submissions = require('../routes/submissions');

module.exports = function(app){
  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });

  app.use(express.json()); // middleware
  app.use('/api/quizzes', quizzes);
  app.use('/api/submissions', submissions);

}
