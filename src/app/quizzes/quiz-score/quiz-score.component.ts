import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { QuizService } from '../quizzes.service';

@Component({
  selector: 'app-quiz-score',
  templateUrl: './quiz-score.component.html',
  styleUrls: ['./quiz-score.component.css']
})
export class QuizScoreComponent{
  score : string | null = null;

  constructor(public quizService: QuizService, public route: ActivatedRoute){}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap : ParamMap) => {
      if(paramMap.has('score')){
        this.score = paramMap.get('score');
      }
    });
  }
}
