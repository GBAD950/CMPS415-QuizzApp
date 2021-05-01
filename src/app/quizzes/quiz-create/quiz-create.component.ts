import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Quiz } from '../quiz.model';
import { QuizService } from '../quizzes.service';

@Component({
  selector: 'app-quiz-create',
  templateUrl: './quiz-create.component.html',
  styleUrls: ['./quiz-create.component.css']
})
export class QuizCreateComponent {
    newQuiz : Quiz = {
      _id: '',
    quizName:  "",
    question1: "",
    selections1:[
        {_id: '', text: '', isCorrect: false }
    ]
    // question2: "",
    // selections2:[
    //     {_id: '', text: '', isCorrect: false }
    // ]
  };

  constructor(public quizService: QuizService){}

  onCreateQuiz(form: NgForm){
    let correct
    if( form.invalid ){ return; }
    if(form.value.q1_correct === 'true') {correct = true; }
    else {correct = false;}
    let selection = ({
      _id: '',
      text: form.value.q1_txt,
      isCorrect: correct
    });
    console.log('First Test - ' + selection.text);
    this.newQuiz.selections1.pop();
    this.newQuiz.selections1.push(selection);
    console.log('Second test - ' + form.value.quizName + ' ' + form.value.question1 + ' ' + this.newQuiz.selections1)
    this.quizService.addQuiz(form.value.quizName, form.value.question1, this.newQuiz.selections1);
    form.resetForm();
  }

}
