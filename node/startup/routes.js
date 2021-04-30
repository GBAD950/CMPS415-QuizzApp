const express = require('express');
const quizzes = require('../routes/quizzes');
const submissions = require('../routes/submissions');

module.exports = function(app){

  app.use(express.json()); // middleware
  app.use('/api/quizzes', quizzes);
  app.use('/api/submissions', submissions);

}
