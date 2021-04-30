import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';

import { Quiz } from './quiz.model';

@Injectable({providedIn: 'root'})
export class QuizService {
  private quizzes: Quiz[] = [];
}
