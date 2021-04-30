const Joi = require('joi');
const mongoose = require('mongoose');

const Submit = mongoose.model('Submit', 
new mongoose.Schema({
    name: {
        type: String,
        required: true
    },    
    answer1: {
        type: String,
        required: true
    },
    answer2: {
        type: String,
        required: true
    },    
    answer3: [
        {
            text: {
                type: String,
                required: true
            }
        }
        
    ],
    answer4: {
        type: String,
        required: true
    },     
    correct: {
        type: Number,
        required: true,
        min: 0,
        default: 0,
    },
    grade: {
        type: Number,
        required: true,
        min: 0,
        default: 0,
    }
}));

function validateSubmit(submit) {
    const schema = Joi.object({
        name: Joi.string().required(),
        answer1: Joi.string().required(),
        answer2: Joi.string().required(),
        answer3: Joi.array().required(),
        answer4: Joi.string().required()
    });

    return schema.validate(submit);
}

exports.Submit = Submit;
exports.validateSubmit = validateSubmit;
