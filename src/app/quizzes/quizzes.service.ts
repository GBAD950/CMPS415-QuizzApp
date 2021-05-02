import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment'
import { map } from 'rxjs/operators';

import { Quiz } from './quiz.model';

const url = "https://young-sierra-69581.herokuapp.com/api"

@Injectable({providedIn: 'root'})
export class QuizService {
  [x: string]: any;
  public quizzes: Quiz[] = [];
  public quizUpdated = new Subject<Quiz[]>();

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

  constructor(private http: HttpClient){}

  getQuizzes(){
    this.http
      .get<{message: string, quizzes: Quiz[]}>(url + '/quizzes')
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

  openQuiz(quizId : string | null){
    console.log('We are in openQuiz  ' + quizId);
    let quiz = {...this.quizzes.find(q => q._id === quizId)};
    console.log(quiz.q1_select1);
    return quiz;
  }

  getQuizUpdateListener() {
    return this.quizUpdated.asObservable();
  }

  addQuiz(quiz: Quiz){
    this.http.post<{message: string, quizId: string}>(url + '/quizzes/new', quiz)
      .subscribe((quizData) => {
        const id = quizData.quizId;
        quiz._id = id;
        this.quizzes.push(quiz);
        this.quizUpdated.next([...this.quizzes]);
      });
  }
}
