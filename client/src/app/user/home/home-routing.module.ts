import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'question',
        loadChildren: 'app/user/home/question/question.module#QuestionModule'
      },
      {
        path: 'test',
        loadChildren: 'app/user/home/test/test.module#TestModule'
      },
      { path: '', redirectTo: 'question', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
