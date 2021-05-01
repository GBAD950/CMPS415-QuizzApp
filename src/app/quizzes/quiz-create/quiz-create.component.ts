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
    q1_select1: { text: '', isCorrect: false },
    q1_select2: { text: '', isCorrect: false },
    q1_select3: { text: '', isCorrect: false },
    q1_select4: { text: '', isCorrect: false },
    question2: "",
    q2_select1: { text: '', isCorrect: false },
    q2_select2: { text: '', isCorrect: false },
    q2_select3: { text: '', isCorrect: false },
    q2_select4: { text: '', isCorrect: false },
    question3: "",
    q3_select1: { text: '', isCorrect: false },
    q3_select2: { text: '', isCorrect: false },
    q3_select3: { text: '', isCorrect: false },
    q3_select4: { text: '', isCorrect: false },
    question4 : "",
    quest4_ans: ""
  };

  constructor(public quizService: QuizService){}

  onCreateQuiz(form: NgForm){
    if( form.invalid ){ return; }

    this.newQuiz.quizName = form.value.quizName;
    this.newQuiz.question1 = form.value.question1;
    this.newQuiz.q1_select1.text = form.value.q1_txt_1;
    this.newQuiz.q1_select2.text = form.value.q1_txt_2;
    this.newQuiz.q1_select3.text = form.value.q1_txt_3;
    this.newQuiz.q1_select4.text = form.value.q1_txt_4;

    this.newQuiz.question2 = form.value.question2;
    this.newQuiz.q2_select1.text = form.value.q2_txt_1;
    this.newQuiz.q2_select2.text = form.value.q2_txt_2;
    this.newQuiz.q2_select3.text = form.value.q2_txt_3;
    this.newQuiz.q2_select4.text = form.value.q2_txt_4;

    this.newQuiz.question3 = form.value.question3;
    this.newQuiz.q3_select1.text = form.value.q3_txt_1;
    this.newQuiz.q3_select2.text = form.value.q3_txt_2;
    this.newQuiz.q3_select3.text = form.value.q3_txt_3;
    this.newQuiz.q3_select4.text = form.value.q3_txt_4;

    this.newQuiz.question4 = form.value.question4;
    this.newQuiz.quest4_ans = form.value.quest4_ans;

    if(form.value.q1_correct_1 === true){
      this.newQuiz.q1_select1.isCorrect = true;
    }
    else { this.newQuiz.q1_select1.isCorrect = false; }
    if(form.value.q1_correct_2 === true){
      this.newQuiz.q1_select2.isCorrect = true;
    }
    else { this.newQuiz.q1_select2.isCorrect = false; }
    if(form.value.q1_correct_3 === true){
      this.newQuiz.q1_select3.isCorrect = true;
    }
    else { this.newQuiz.q1_select3.isCorrect = false; }
    if(form.value.q1_correct_4 === true){
      this.newQuiz.q1_select4.isCorrect = true;
    }
    else { this.newQuiz.q1_select4.isCorrect = false; }

    if(form.value.q2_correct_1 === true){
      this.newQuiz.q2_select1.isCorrect = true;
    }
    else { this.newQuiz.q2_select1.isCorrect = false; }
    if(form.value.q2_correct_2 === true){
      this.newQuiz.q2_select2.isCorrect = true;
    }
    else { this.newQuiz.q2_select2.isCorrect = false; }
    if(form.value.q2_correct_3 === true){
      this.newQuiz.q2_select3.isCorrect = true;
    }
    else { this.newQuiz.q2_select3.isCorrect = false; }
    if(form.value.q2_correct_4 === true){
      this.newQuiz.q2_select4.isCorrect = true;
    }
    else { this.newQuiz.q2_select4.isCorrect = false; }

    if(form.value.q3_correct_1 === true){
      this.newQuiz.q3_select1.isCorrect = true;
    }
    else { this.newQuiz.q3_select1.isCorrect = false; }
    if(form.value.q3_correct_2 === true){
      this.newQuiz.q3_select2.isCorrect = true;
    }
    else { this.newQuiz.q3_select2.isCorrect = false; }
    if(form.value.q3_correct_3 === true){
      this.newQuiz.q3_select3.isCorrect = true;
    }
    else { this.newQuiz.q3_select3.isCorrect = false; }
    if(form.value.q3_correct_4 === true){
      this.newQuiz.q3_select4.isCorrect = true;
    }
    else { this.newQuiz.q3_select4.isCorrect = false; }

    this.quizService.addQuiz(this.newQuiz);
    form.resetForm();
  }

}
