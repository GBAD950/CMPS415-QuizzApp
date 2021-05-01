import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Quiz } from './quiz.model';

@Injectable({providedIn: 'root'})
export class QuizService {
  private quizzes: Quiz[] = [];
  private quizUpdated = new Subject<Quiz[]>();

  constructor(private http: HttpClient){}

  getQuizzes(){
    this.http
      .get<{message: string, quizzes: Quiz[]}>(
        'http://localhost:3000/api/quizzes'
        )
        .pipe(map((quizData) => {
          return quizData.quizzes.map((quiz) => {
            return {
              _id: quiz._id,
              quizName: quiz.quizName,
              question1: quiz.question1,
              q1_select1: quiz.q1_select1,
              q1_select2: quiz.q1_select2,
              q1_select3: quiz.q1_select3,
              q1_select4: quiz.q1_select4,

              question2: quiz.question2,
              q2_select1: quiz.q2_select1,
              q2_select2: quiz.q2_select2,
              q2_select3: quiz.q2_select3,
              q2_select4: quiz.q2_select4,

              question3: quiz.question3,
              q3_select1: quiz.q3_select1,
              q3_select2: quiz.q3_select2,
              q3_select3: quiz.q3_select3,
              q3_select4: quiz.q3_select4,

              question4: quiz.question4,
              quest4_ans: quiz.quest4_ans
            };
          });
        }))
      .subscribe((_quizzes) => {
        this.quizzes = _quizzes;
        this.quizUpdated.next([...this.quizzes]);
    });
  }

  getQuizUpdateListener() {
    return this.quizUpdated.asObservable();
  }

  addQuiz(quiz: Quiz){
    this.http.post<{message: string, quizId: string}>('http://localhost:3000/api/quizzes/new', quiz)
      .subscribe((quizData) => {
        const id = quizData.quizId;
        quiz._id = id;
        this.quizzes.push(quiz);
        this.quizUpdated.next([...this.quizzes]);
      });
  }
}
