import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CKEditorModule} from 'ng2-ckeditor';
import {CategoryService} from '../category.service';
import { SharedModule } from '../../shared/shared.module';
import { QuestionRoutingModule } from './question-routing.module';
import { HomeComponent } from './home/home.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { ListQuestionsComponent } from './home/list-questions/list-questions.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';

@NgModule({
  imports: [
    CommonModule,
    CKEditorModule,
    QuestionRoutingModule,
    SharedModule
  ],
  declarations: [HomeComponent, AddQuestionComponent, ListQuestionsComponent, QuestionDetailComponent],
  exports: [
  ],
  providers:[CategoryService]
})
export class QuestionModule { }
