import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizCreateComponent } from './quizzes/quiz-create/quiz-create.component';
import { QuizListComponent } from './quizzes/quiz-list/quiz-list.component';
import { QuizScoreComponent } from './quizzes/quiz-score/quiz-score.component';
import { QuizTakeComponent } from './quizzes/quiz-take/quiz-take.component';

const routes: Routes = [
  { path: '', component: QuizListComponent },
  { path: 'create', component: QuizCreateComponent },
  { path: 'take/:quizId', component: QuizTakeComponent },
  { path: 'submit/:score', component: QuizScoreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
