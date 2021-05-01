const { boolean } = require('joi');
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
    q1_select1:
    {
      text:
      {
        type: String,
        required: true
      },
      isCorrect:
      {
        type: Boolean,
        required: true
      }
    },
    q1_select2:
    {
      text:
      {
        type: String,
        required: true
      },
      isCorrect:
      {
        type: Boolean,
        required: true
      }
    },
    q1_select3:
    {
      text:
      {
        type: String,
        required: true
      },
      isCorrect:
      {
        type: Boolean,
        required: true
      }
    },
    q1_select4:
    {
      text:
      {
        type: String,
        required: true
      },
      isCorrect:
      {
        type: Boolean,
        required: true
      }
    },
    question2: {
        type: String,
        required: true
    },
    q2_select1:
    {
      text:
      {
        type: String,
        required: true
      },
      isCorrect:
      {
        type: Boolean,
        required: true
      }
    },
    q2_select2:
    {
      text:
      {
        type: String,
        required: true
      },
      isCorrect:
      {
        type: Boolean,
        required: true
      }
    },
    q2_select3:
    {
      text:
      {
        type: String,
        required: true
      },
      isCorrect:
      {
        type: Boolean,
        required: true
      }
    },
    q2_select4:
    {
      text:
      {
        type: String,
        required: true
      },
      isCorrect:
      {
        type: Boolean,
        required: true
      }
    },
    question3: {
        type: String,
        required: true
    },
    q3_select1:
    {
      text:
      {
        type: String,
        required: true
      },
      isCorrect:
      {
        type: Boolean,
        required: true
      }
    },
    q3_select2:
    {
      text:
      {
        type: String,
        required: true
      },
      isCorrect:
      {
        type: Boolean,
        required: true
      }
    },
    q3_select3:
    {
      text:
      {
        type: String,
        required: true
      },
      isCorrect:
      {
        type: Boolean,
        required: true
      }
    },
    q3_select4:
    {
      text:
      {
        type: String,
        required: true
      },
      isCorrect:
      {
        type: Boolean,
        required: true
      }
    },
    question4: {
      type: String,
      required: true
    },
    quest4_ans:
    {
      type: String,
      required: true
    }
}));

exports.Quiz = Quiz;

