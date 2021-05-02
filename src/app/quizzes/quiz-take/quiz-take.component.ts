import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { QuizService } from '../quizzes.service';

@Component({
  selector: 'app-quiz-take',
  templateUrl: './quiz-take.component.html',
  styleUrls: ['./quiz-take.component.css']
})
export class QuizTakeComponent implements OnInit{
  quizId!: any;
  quiz!: any;
  question1: boolean = false;
  question2: boolean = false;
  question3: boolean = false;
  totCorrect: number = 0;

  constructor(public quizService: QuizService, public route: ActivatedRoute, public router: Router){}

  ngOnInit() {
    var id: string | null;
    this.route.paramMap.subscribe((paramMap : ParamMap) => {
      if(paramMap.has('quizId')){
        id = paramMap.get('quizId');
        console.log(id);
        this.quiz = this.quizService.openQuiz(id);

      }
    });
  }

  onSubmit(form: NgForm){
    if(this.question1 === true){
      this.totCorrect = this.totCorrect + 1;
    }
    if(this.question2 === true){
      this.totCorrect = this.totCorrect + 1;
    }
    if(this.question3 === true){
      this.totCorrect = this.totCorrect + 1;
    }
    if(form.value.question4 === this.quiz.quest4_ans) {
      this.totCorrect = this.totCorrect + 1;
    }
    this.router.navigate(['/submit', this.totCorrect]);
  }
}
