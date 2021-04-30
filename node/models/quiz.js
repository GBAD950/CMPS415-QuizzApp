const Joi = require('joi');
const mongoose = require('mongoose');

const Quiz = mongoose.model('Quiz', 
new mongoose.Schema({
    title1: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    question1: [
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
    title2: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    question2: [
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
    title3: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    question3: [
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
    title4: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    question4: {
        type: String,
        required: true, 
        minlength: 10,
        maxlength: 256
    }
}));

function validateQuiz(quiz) {
    const schema = Joi.object({
        title1: Joi.string().min(5).max(50).required(),
        title2: Joi.string().min(5).max(50).required(),
        title3: Joi.string().min(5).max(50).required(),
        title4: Joi.string().min(5).max(50).required(),
        question1: Joi.array().required(),
        question2: Joi.array().required(),
        question3: Joi.array().required(),
        question4: Joi.string().min(10).max(256).required()
    });

    return schema.validate(quiz);
}

exports.Quiz = Quiz;
exports.validate = validateQuiz;