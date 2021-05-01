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
              selections1: quiz.selections1,
              // question2: quiz.question2,
              // selections2: quiz.selections2
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

  addQuiz(quizName: string, question1: string, selections : any){
    const quiz: Quiz = {
      _id: null,
      quizName: quizName,
      question1: question1,
      selections1: selections
    };
    console.log('Third test - ' + quiz);
    this.http.post<{message: string, quizId: string}>('http://localhost:3000/api/quizzes/new', quiz)
      .subscribe((quizData) => {
        const id = quizData.quizId;
        quiz._id = id;
        this.quizzes.push(quiz);
        this.quizUpdated.next([...this.quizzes]);
      });
  }
}
