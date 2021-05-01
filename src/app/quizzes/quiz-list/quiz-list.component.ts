import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Quiz } from '../quiz.model';
import { QuizService } from '../quizzes.service';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent {
  quizzes : Quiz[] = [];

  private quizSub: Subscription = new Subscription;

  constructor(public quizService: QuizService){}

  ngOnInit(){
    this.quizService.getQuizzes();
    this.quizSub = this.quizService.getQuizUpdateListener()
    .subscribe((quizzes: Quiz[]) => {
        this.quizzes = quizzes;
    });
  }

  ngOnDestroy() {
    this.quizSub.unsubscribe();
  }
}
