const {Quiz, validate} = require('../models/quiz');
const { Submit, validateSubmit } = require('../models/submit');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const app = express();


router.get('/', async (req, res) => {
    const quizzes = await Quiz.find().sort('tite');
    res.status(200).json({
      message: 'quizzes fetched successfully',
      quizzes: quizzes
    });
});

router.post('/new', (req, res) => {
    console.log(req.body.quizName);
    console.log(req.body.question1);
    console.log(req.body.q1_select1);
    console.log(req.body.q1_select2);
    console.log(req.body.q1_select3);
    console.log(req.body.q1_select4);

    console.log(req.body.question2);
    console.log(req.body.q2_select1);
    console.log(req.body.q2_select2);
    console.log(req.body.q2_select3);
    console.log(req.body.q2_select4);

    console.log(req.body.question3);
    console.log(req.body.q3_select1);
    console.log(req.body.q3_select2);
    console.log(req.body.q3_select3);
    console.log(req.body.q3_select4);

    console.log(req.body.question4);
    console.log(req.body.quest4_ans);

    const quiz = new Quiz({
      quizName: req.body.quizName,

      question1: req.body.question1,
      q1_select1: req.body.q1_select1,
      q1_select2: req.body.q1_select2,
      q1_select3: req.body.q1_select3,
      q1_select4: req.body.q1_select4,

      question2: req.body.question2,
      q2_select1: req.body.q2_select1,
      q2_select2: req.body.q2_select2,
      q2_select3: req.body.q2_select3,
      q2_select4: req.body.q2_select4,

      question3: req.body.question3,
      q3_select1: req.body.q3_select1,
      q3_select2: req.body.q3_select2,
      q3_select3: req.body.q3_select3,
      q3_select4: req.body.q3_select4,

      question4: req.body.question4,
      quest4_ans: req.body.quest4_ans
    });

    console.log('Before save');

   quiz.save().then(result => {
      console.log(result);
      res.status(201).json({
        message: 'Post added successfully',
        quizId: result._id
      });
    });
});

router.post('/quiz/:id', async (req, res) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id))
    return res.status(400).send('quiz not found');

    const quiz = await Quiz.findById( req.params.id);
    if(!quiz){return res.status(404).send('quiz not found');}

    const { error } = validateSubmit(req.body);
    if(error){return res.status(400).send(error.details[0].message);}

   try{
        const submit = new Submit({
            name: req.body.name,
            answer1: req.body.answer1,
            answer2: req.body.answer2,
            answer3: req.body.answer3,
            answer4: req.body.answer4
        });

        let i = 0, len1 = quiz.question1.length;
        for(i; i<len1; i++){
            if((submit.answer1 === quiz.question1[i].text) && (quiz.question1[i].isCorrect === true)){
                submit.correct++;
            }
        }

        let len2 = quiz.question2.length;
        i = 0;
        for(i; i<len2; i++){
            if((submit.answer2 === quiz.question2[i].text) && (quiz.question2[i].isCorrect === true)){
                submit.correct++;
            }

        }

        let len3 = quiz.question3.length;
        let _len3 = submit.answer3.length;
        let j = 0, correctAns = 0, correctSubmit = 0;
        i = 0;
        for(i; i<len3; i++){
            if(quiz.question3[i].isCorrect === true){
                correctAns++;
            }
            for(j; j<_len3; j++){
                if((submit.answer3[j].text === quiz.question3[i].text) && (quiz.question3[i].isCorrect === true)){
                    correctSubmit++;
                }
            }

            j = 0;
        }

        if(correctSubmit === correctAns){
            submit.correct++;
        }

        if(submit.answer4 === quiz.question4){
            submit.correct++;
        }

        submit.grade = (submit.correct / 4) * 100;

        await submit.save()
        res.send(submit);

   }

   catch (ex) {
    res.status(500).send('Something Failed...');
    }
});

router.get('/:id', async (req, res) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id))
    return res.status(400).send('quiz not found');

    const quiz = await Quiz.findById( req.params.id);
    if(!quiz){return res.status(404).send('quiz not found');}

    else res.json({
      message: 'quiz fetched successfully',
      quizzes: quiz
    });
});

module.exports = router;
