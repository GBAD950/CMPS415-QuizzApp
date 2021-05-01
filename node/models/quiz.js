const mongoose = require('mongoose');

const Quiz = mongoose.model('Quiz',
new mongoose.Schema({
    quizName: {
      type: String,
      required: true
    },
    question1: {
        type: String,
        required: true
    },
    selections1: [
        {
            text: {
                type: String,
                required: true
            },
            isCorrect: {
                type: Boolean,
                required: true,
                default: false
            }
        }
    ],
  // question2: {
  //     type: String,
  //     required: true,
  //     minlength: 5,
  //     maxlength: 50
  // },
  // selections2: [
  //     {
  //         text: {
  //             type: String,
  //             required: true
  //         },
  //         isCorrect: {
  //             type: Boolean,
  //             required: true,
  //             default: false
  //         }
  //     }
  // ]

}));

exports.Quiz = Quiz;

